import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import images from '~/assets/images';
import { collectionItems } from '~/data';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Trending() {
    const options = [
        {
            title: 'Trending',
            time: ['1h', '6h', '24h', '7d'],
        },
        {
            title: 'Top',
            time: ['1h', '6h', '24h', '7d', '30d', 'All'],
        },
    ];

    const [option, setOption] = useState(options[0].title);
    const [currentState, setCurrentState] = useState(1);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    {options.map((item) => (
                        <div
                            key={item.title}
                            className={item.title === option ? cx('filter', 'active') : cx('filter')}
                            onClick={() => setOption(item.title)}
                        >
                            <span> {item.title}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('header-right')}>
                    {options
                        .filter((item) => item.title === option)
                        .map((filtered) => (
                            <div className={cx('list-value')} key={filtered.title}>
                                {filtered.time.map((value, index) => (
                                    <div
                                        className={index + 1 === currentState ? cx('value', 'active') : cx('value')}
                                        key={value}
                                        onClick={() => setCurrentState(index + 1)}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        ))}

                    <button className={cx('btn-view-all')}>View All</button>
                </div>
            </header>

            <div className={cx('list-item')}>
                <div className={cx('list-item-title')}>
                    <span>COLLECTION</span>
                    <span>FLOOR PRICE</span>
                    <span>VOLUME</span>
                </div>
                <div className={cx('list-item-title')}>
                    <span>COLLECTION</span>
                    <span>FLOOR PRICE</span>
                    <span>VOLUME</span>
                </div>
                {collectionItems.map((item, index) => (
                    <div className={cx('item')} key={index}>
                        <div className={cx('collection')}>
                            <span className={cx('roll')}>{index + 1}</span>
                            <img className={cx('thumbnail-collection')} alt="" src={item.imageId} />
                            <p className={cx('name-collection')}>{item.name}</p>
                            {item.auth === true && <img className={cx('auth')} src={images.check} alt="" />}
                        </div>

                        {item.floor_price === null ? <span>_</span> : <span>{item.floor_price} ETH</span>}
                        <div className={cx('volumn')}>
                            <span>{item.volume} ETH</span>

                            {item.percentVolumn < 0 && (
                                <span className={cx('volumn-increase')}> {item.percentVolumn}%</span>
                            )}
                            {item.percentVolumn > 0 && (
                                <span className={cx('volunm-unincrease')}> + {item.percentVolumn}%</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
