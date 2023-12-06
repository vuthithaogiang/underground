import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import { getTopTenCollectionLatest } from '~/services/CollectionService';
import { useEffect, useState } from 'react';
import { collectionTest } from '~/data';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Collection() {
    const [filter, setFilter] = useState('DESC');
    const [type, setType] = useState('');
    const [data, setData] = useState(collectionTest);
    const navigate = useNavigate();

    useEffect(() => {
        getTopTenCollectionLatest(filter).then((data) => {
            if (data) {
                const newData = data.concat(collectionTest);
                setData(newData);
            } else {
                console.log('do not have data!!');
            }
        });
    }, [filter]);

    const sorting = (col) => {
        setType(col);
        if (filter === 'DESC') {
            const sorted = data.sort((a, b) => (a[col] < b[col] ? 1 : -1));
            setData(sorted);

            setFilter('ASC');
        }
        if (filter === 'ASC') {
            const sorted = data.sort((a, b) => (a[col] > b[col] ? 1 : -1));
            setData(sorted);

            setFilter('DESC');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-filter')}>
                <span>Collection</span>
                <span className={cx('item-sort')} onClick={() => sorting('totalValue')}>
                    Volumn
                    {type !== 'totalValue' && <FontAwesomeIcon icon={faSort} />}
                    {type === 'totalValue' && filter === 'ASC' && (
                        <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                    )}
                    {type === 'totalValue' && filter === 'DESC' && (
                        <FontAwesomeIcon className={cx('icon-up')} icon={faSortUp} />
                    )}
                </span>
                <span className={cx('item-sort')} onClick={() => sorting('floorPrice')}>
                    % Change
                    {type !== 'floorPrice' && <FontAwesomeIcon icon={faSort} />}
                    {type === 'floorPrice' && filter === 'ASC' && (
                        <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                    )}
                    {type === 'floorPrice' && filter === 'DESC' && (
                        <FontAwesomeIcon className={cx('icon-up')} icon={faSortUp} />
                    )}
                </span>
                <span className={cx('item-sort')} onClick={() => sorting('percentVolume')}>
                    Floor Price
                    {type !== 'percentVolume' && <FontAwesomeIcon icon={faSort} />}
                    {type === 'percentVolume' && filter === 'ASC' && (
                        <FontAwesomeIcon className={cx('icon-down')} icon={faSortDown} />
                    )}
                    {type === 'percentVolume' && filter === 'DESC' && (
                        <FontAwesomeIcon className={cx('icon-up')} icon={faSortUp} />
                    )}
                </span>
            </div>
            {data.map((item, index) => (
                <div className={cx('item')} key={index} onClick={() => navigate(`/collection/${item.collectionName}`)}>
                    <div className={cx('collection')}>
                        <span className={cx('roll')}>{item.collectionId}</span>
                        <img className={cx('thumbnail-collection')} alt="" src={item.logoImage} />
                        <p className={cx('name-collection')}>{item.collectionName}</p>
                        {item.auth === true && <img className={cx('auth')} src={images.check} alt="" />}
                    </div>

                    {item.totalValue === null ? <span>_</span> : <span>{item.totalValue} ETH</span>}

                    {(item.floorPrice === null) | !item.floorPrice ? (
                        <span>_</span>
                    ) : (
                        <span>{item.floorPrice} ETH</span>
                    )}

                    {item.percentVolume < 0 && <span className={cx('volumn-increase')}> {item.percentVolume}%</span>}
                    {item.percentVolume > 0 && (
                        <span className={cx('volunm-unincrease')}> + {item.percentVolume}%</span>
                    )}
                    {(item.percentVolume === 0) | !item.percentVolume ? <span>_</span> : <></>}
                </div>
            ))}
        </div>
    );
}

export default Collection;
