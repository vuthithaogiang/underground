import classNames from 'classnames/bind';
import styles from './UploadCollection.module.scss';
import images from '~/assets/images';
import DropZoneFile from '~/components/DropZoneFile';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { connectMetaMaskState } from '~/global-state/connect-metamask';
import { constSelector, useRecoilState } from 'recoil';
import axiosClient from '~/untils/axiosClient';
import BackDrop from '~/components/BackDrop';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const URL_API = 'http://localhost:8080/api/v1';

function UploadCollection() {
    const {
        handleSubmit,
        setValue,
        register,
        formState: { errors },
    } = useForm();

    const [categories, setCategories] = useState();
    const [featuredImage, setFeatureImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const [recoilState, setRecoilState] = useRecoilState(connectMetaMaskState);
    const navigate = useNavigate();

    const connectCreateCollectionService = async (data) => {
        if (!featuredImage || !logoImage || !bannerImage) {
            alert('Please upload all images and try again!');
            return;
        }

        setOpenBackDrop(true);
        const { name, description, categoryId } = data;
        console.log(categoryId);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('bannerImage', bannerImage);
            formData.append('featureImage', featuredImage);
            formData.append('logoImage', logoImage);
            formData.append('description', description);
            formData.append('categoryId', categoryId);

            const response = await axiosClient.post(`/collection`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });
            console.log(response);

            setOpenBackDrop(false);
            navigate(`/account/${recoilState.accountCurrent}`);
        } catch (error) {
            console.log('error:', error);
        }
    };

    const getCategories = async () => {
        try {
            const data = await (await fetch(`${URL_API}/category`)).json();
            setCategories(data.body);
        } catch (error) {}
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleChange = (event) => {
        setValue('categoryId', event.target.value);
    };

    console.log(categories);
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>Upload collection</h4>
            <div className={cx('note')}>
                <span>Image, Video, Audio, or 3D Model</span>
                <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
            </div>
            <form onSubmit={handleSubmit(connectCreateCollectionService)}>
                <div className={cx('list-dropzone')}>
                    {/* Feature image */}
                    <div className={cx('item')}>
                        <figure className={cx('wrap-icon')}>
                            <img className={cx('icon')} src={images.uploadIcon1} alt="" />
                        </figure>
                        <p className={cx('desc')}>Feature Image</p>
                        <DropZoneFile
                            title="Drag & drop featuredImage here"
                            heading="or Browse media on your device"
                            image={images.iconUpload}
                            setImage={setFeatureImage}
                        />
                    </div>

                    {/* Logo image */}
                    <div className={cx('item')}>
                        <figure className={cx('wrap-icon')}>
                            <img className={cx('icon')} src={images.uploadIcon2} alt="" />
                        </figure>
                        <p className={cx('desc')}>Logo Image</p>
                        <DropZoneFile
                            title="Drag & drop featuredImage here"
                            heading="or Browse media on your device"
                            image={images.iconUpload}
                            setImage={setLogoImage}
                        />
                    </div>

                    {/* Banner image */}
                    <div className={cx('item')}>
                        <figure className={cx('wrap-icon')}>
                            <img className={cx('icon')} src={images.uploadIcon3} alt="" />
                        </figure>
                        <p className={cx('desc')}>Banner Image</p>
                        <DropZoneFile
                            title="Drag & drop featuredImage here"
                            heading="or Browse media on your device"
                            image={images.iconUpload}
                            setImage={setBannerImage}
                        />
                    </div>
                </div>

                <div className={cx('upload-box')}>
                    <div className={cx('form-row')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="name" className={cx('form-label')}>
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your collection name"
                                className={cx('form-input')}
                                {...register('name', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^[A-z][A-z0-9-_]{3,23}$/i,
                                        message: 'Please enter collection name.',
                                    },
                                })}
                            />

                            {errors.name && <p className={cx('form-error')}>{errors.name.message}</p>}
                        </div>

                        <div className={cx('form-group')}>
                            <label className={cx('form-label')} htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className={cx('form-textarea')}
                                id="description"
                                placeholder="Something about your collection"
                                name="description"
                                {...register('description', {
                                    maxLength: {
                                        value: 300,
                                        message: 'This content must maximum 300 characters!',
                                    },
                                })}
                            ></textarea>
                            {errors.description && <p className={cx('form-error')}>{errors.description.message}</p>}
                        </div>
                    </div>

                    <div className={cx('form-row')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="categoryId" className={cx('form-label', 'large')}>
                                What the type of your collection?
                            </label>

                            <div className={cx('select')}>
                                <select
                                    {...register('categoryId', {
                                        required: 'Required',
                                    })}
                                    onChange={handleChange}
                                    id="categoryId"
                                >
                                    {categories?.map((item) => (
                                        <option key={item.categoryId} value={item.categoryId}>
                                            {item.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.categoryId && <p className={cx('form-error')}>Choose a Category.</p>}
                        </div>
                    </div>

                    <Button
                        primary
                        className={cx('submit-btn')}
                        type="submit"
                        onClick={() => handleSubmit(connectCreateCollectionService)}
                    >
                        Upload
                    </Button>
                </div>
            </form>

            <BackDrop openBackDrop={openBackDrop} />
        </div>
    );
}

export default UploadCollection;
