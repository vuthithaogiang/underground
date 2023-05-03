import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Introduction() {
    const stats = [
        {
            number: '12M',
            title: 'Active User',
        },
        {
            number: '16',
            title: 'Partner',
        },
        {
            number: '7/24',
            title: 'Support',
        },
    ];

    const number = [1, 2, 3];

    const [slider, setSlider] = useState(1);
    useEffect(() => {
        setSlider(2);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <div className={cx('header')}>
                        <h2 className={cx('heading')}>
                            Okey, <strong>Let's</strong> see Underground in numbers
                        </h2>

                        <p className={cx('desc')}>
                            Powering a productive team means using a powerful tool (and plenty of snacks). From meetings
                            and projects to events and goal setting, Underground intuitive features give any team the
                            ability to quickly set up and customize workflows for just about anything
                        </p>
                    </div>

                    <div className={cx('numbers')}>
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={slider === index + 1 ? cx('number-item', 'active') : cx('number-item')}
                                onClick={() => setSlider(index + 1)}
                            >
                                <span>{item.number}</span>
                                <p>{item.title}</p>
                            </div>
                        ))}

                        <div className={cx('dots')}>
                            {number.map((item) => (
                                <div
                                    key={item}
                                    className={item === slider ? cx('dot', 'active') : cx('dot')}
                                    onClick={() => setSlider(item)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('inner-right')}>
                    <div className={cx('right-container')}>
                        <div className={cx('separate-outer')}>
                            <div className={cx('separate-inner')}>
                                <figure className={cx('wrap-img')}>
                                    <img src={images.roundDecor} alt="" />
                                </figure>
                            </div>
                        </div>

                        <div className={cx('list-item')}>
                            <div className={cx('item')}>
                                <p>Online Support</p>
                                <div className={cx('icon')}>
                                    <img src={images.iconIntro1} alt="" />
                                </div>
                            </div>

                            <div className={cx('item')}>
                                <p>Wallet</p>
                                <div className={cx('icon')}>
                                    <img src={images.iconIntro2} alt="" />
                                </div>
                            </div>

                            <div className={cx('item')}>
                                <div className={cx('icon')}>
                                    <img src={images.iconIntro3} alt="" />
                                </div>
                                <p>Smart Contract</p>
                            </div>

                            <div className={cx('item')}>
                                <p>Underground</p>

                                <div className={cx('list-avatar')}>
                                    <img className={cx('avatar')} src={images.profile1} />
                                    <img className={cx('avatar')} src={images.profile2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
