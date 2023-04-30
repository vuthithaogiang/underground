import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosClient from '~/untils/axiosClient';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    let params = useParams();

    console.log(params.walletaddress);
    const [profile, setProfile] = useState(null);

    const fetchProfileDetail = async () => {
        const {
            data: { body },
        } = await axiosClient.get(`/profile/${params.walletaddress}`);
        return body;
    };

    useEffect(() => {
        fetchProfileDetail()
            .then((data) => {
                setProfile(data);
            })
            .catch((err) => {});
    }, [params.walletaddress]);

    console.log(JSON.stringify(profile));

    const historyAccount = [
        {
            title: 'Your Collection',
            default: 'You do not have any collection.',
        },
        {
            title: 'Activity',
            default: 'You are not activity.',
        },
    ];

    const [infoTitle, setInfoTitle] = useState(historyAccount[0].title);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img src={images.defaultAvatar} alt="" />
                <div className={cx('info-inner')}>
                    <span>Your wallet address</span>

                    <p>{params.walletaddress}</p>

                    <div className={cx('edit-profile')}>
                        <FontAwesomeIcon icon={faPen} />
                        <span>Edit Profile</span>
                    </div>
                </div>
            </div>
            <section className={cx('history')}>
                <ul className={cx('list-item')}>
                    {historyAccount.map((item) => (
                        <li
                            key={item.title}
                            onClick={() => setInfoTitle(item.title)}
                            className={cx('item-info-list', `${item.title === infoTitle ? 'active' : ''}`)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>

                {historyAccount.map((item) => (
                    <div
                        key={item.title}
                        className={cx('info-container', `${item.title === infoTitle ? 'active' : ''}`)}
                    >
                        {item.title === 'Your Collection' && <p>{item.default}</p>}
                        {item.title === 'Activity' && <p>{item.default}</p>}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Profile;
