import classNames from 'classnames/bind';
import styles from './Features.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Features() {
    const feartures = [
        {
            title: 'Net Working',
            desc: 'Connect with some of the most notable NFT traders and investors.',
        },
        {
            title: 'Mint monitors',
            desc: 'Locate th hottest mints and access evrything with one click.',
        },
        {
            title: 'Intelligence',
            desc: 'Curated alpha, with an emphasis on quantity and consistercy.',
        },
        {
            title: 'Personalized Wallet tracking',
            desc: 'Customize anf follow any wallets you want with our in-house built wallet traders.',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('fearture-left')}>
                    <div className={cx('list-separates')}>
                        <div className={cx('separate')}></div>
                        <div className={cx('separate')}></div>
                        <div className={cx('separate')}></div>
                        <div className={cx('separate')}></div>
                        <div className={cx('contain-p', 'first')}>
                            <p>Smart money</p>
                        </div>
                        <div className={cx('contain-p', 'second')}>
                            <p>Exclusive network</p>
                        </div>
                        <div className={cx('contain-p', 'third')}>
                            <p>Underground's member</p>
                        </div>
                        <div className={cx('contain-p')}>
                            <p>NFT investors equipped</p>
                        </div>
                    </div>
                </div>
                <div className={cx('fearture-right')}>
                    <header className={cx('heading')}>
                        <h2>
                            Stay ahead of <strong>smart money</strong>
                        </h2>
                        <p className={cx('desc')}>
                            Smart money. Early alpha. Exclusive network. An underground membership unlocks access to a
                            professional, best-in-class community of NFT investors equipped with industry-leading tools
                            and insights to keep us ahead of the curve.
                        </p>
                    </header>

                    <div className={cx('list-fearture')}>
                        {feartures.map((item, index) => (
                            <div className={cx('fearture-item')} key={index}>
                                <div className={cx('item-icon')}>
                                    <img src={images.iconV} alt="" />
                                </div>
                                <div className={cx('item-content')}>
                                    <h4 className={cx('item-name')}>{item.title}</h4>
                                    <p className={cx('item-desc')}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
