import classNames from 'classnames/bind';
import styles from './DropZone.module.scss';
import { useDropzone } from 'react-dropzone';
import images from '~/assets/images';
import React, { useState, useCallback } from 'react';

const cx = classNames.bind(styles);

const DropZoneFile = React.forwardRef(({ title, heading, subHeading, setImage }, ref) => {
    const [fileUrl, setFileUrl] = useState(images.iconUpload);

    const onDrop = useCallback(async (acceptedFile) => {
        const url = URL.createObjectURL(acceptedFile[0]);
        setFileUrl(url);
        setImage(acceptedFile[0]);
    });

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxSize: 5000000,
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={cx('drop-input')}>
                    <p>{title}</p>
                    <img className={fileUrl === images.iconUpload ? cx('icon') : cx('thumbnail')} src={fileUrl} />
                    <p>{heading}</p>

                    {subHeading && <p>{subHeading}</p>}
                </div>
            </div>
        </div>
    );
});
export default DropZoneFile;
