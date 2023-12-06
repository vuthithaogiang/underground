import classNames from 'classnames/bind';
import styles from './DetailCollection.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collectionTest } from '~/data';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faGlobe, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function DetailCollection() {
    const params = useParams();
    console.log(params.collectionName);

    const [data, setData] = useState(null);

    useEffect(() => {
        const db = collectionTest.filter((item) => item.collectionName === params.collectionName);
        console.log(db[0]);
        setData(db[0]);
    }, [params.collectionName]);
    return (
        <div className={cx('wrapper')}>
            {data && (
                <>
                    <header className={cx('header')}>
                        <div className={cx('thumnail-img')}>
                            <figure>
                                <img src={images.bannerDefault} alt="" />
                            </figure>
                            <div className={cx('logo-img')}>
                                {' '}
                                <img src={data.logoImage} alt="" />
                            </div>
                        </div>
                        <div className={cx('collection-group')}>
                            <div className={cx('collection-name')}>
                                <h3>{data.collectionName}</h3>
                                {data.auth && (
                                    <>
                                        <Tippy
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('desc-lollectio-auth')} tabIndex={'-1'} {...attrs}>
                                                    <p>
                                                        This collection belong to a verified account and has significant
                                                        interest or sale.
                                                        <span> Learn more</span>
                                                    </p>
                                                </div>
                                            )}
                                            placement="right-start"
                                        >
                                            <img className={cx('logo-auth')} src={images.check} alt="" />
                                        </Tippy>
                                    </>
                                )}
                            </div>
                            <div className={cx('socials')}>
                                <>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('tippy-twitter')} tabIndex={'-1'} {...attrs}>
                                                <p>Twitter</p>
                                                <p>Ownership verified</p>
                                            </div>
                                        )}
                                        placement="top"
                                    >
                                        <div className={cx('item')}>
                                            <img src={images.twitterIcon} alt="" />
                                        </div>
                                    </Tippy>
                                </>
                                <>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('tippy-web')} tabIndex={'-1'} {...attrs}>
                                                <p>Website</p>
                                            </div>
                                        )}
                                        placement="top"
                                    >
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </div>
                                    </Tippy>
                                </>
                                <>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('tippy-watchlist')} tabIndex={'-1'} {...attrs}>
                                                <p>Add to Watchlist</p>
                                            </div>
                                        )}
                                        placement="top"
                                    >
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Tippy>
                                </>
                                <>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('tippy-copylink')} tabIndex={'-1'} {...attrs}>
                                                <img src={images.gimIcon} alt="" />
                                                <span>Copy link</span>
                                            </div>
                                        )}
                                        placement="top"
                                    >
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon icon={faShareNodes} />
                                        </div>
                                    </Tippy>
                                </>
                                <>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('tippy-report')} tabIndex={'-1'} {...attrs}>
                                                <FontAwesomeIcon icon={faFlag} />
                                                <span>Make a report</span>
                                            </div>
                                        )}
                                        placement="top"
                                    >
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon icon={faEllipsis} />
                                        </div>
                                    </Tippy>
                                </>
                            </div>
                        </div>
                        <div className={cx('author')}>
                            <p>
                                By <strong>IAMSaved</strong>
                            </p>
                        </div>
                        <div className={cx('description')}>
                            <div>
                                <p>
                                    Items <strong>9.9999</strong>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Created <strong>Apr 2023</strong>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Creator earnings <strong>7.5%</strong>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Chain <strong>Ethereum</strong>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Category <strong>Art</strong>
                                </p>
                            </div>
                        </div>
                        <p className={cx('desc-collection')}>
                            The ultimate NFT project for those who live and breathe the crypto world. Discover the
                            digital representations of your Saved Soul and be a part of a community that truly
                            understands the highs and lows of the Web3 journey.
                        </p>
                        <div className={cx('stats')}>
                            <div className={cx('stats-item')}>
                                <span>1.214 ETH</span>
                                <span>total volume</span>
                            </div>
                            <div className={cx('stats-item')}>
                                <span>0.115 ETH</span>
                                <span>floor price</span>
                            </div>
                            <div className={cx('stats-item')}>
                                <span>0.1051 WETH</span>
                                <span>best offer</span>
                            </div>
                            <div className={cx('stats-item')}>
                                <span>3%</span>
                                <span>listed</span>
                            </div>
                            <div className={cx('stats-item')}>
                                <span>2,081</span>
                                <span>owners</span>
                            </div>
                            <div className={cx('stats-item')}>
                                <span>21%</span>
                                <span>uinique owners</span>
                            </div>
                        </div>
                    </header>
                    <div className={cx('content')}>Content</div>
                </>
            )}
        </div>
    );
}

export default DetailCollection;
