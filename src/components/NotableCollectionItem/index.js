import classNames from 'classnames/bind';
import styles from './NotableCollectionItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function NotableCollectionItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('thumb')} src={data.imageId} alt="" />
                <div className={cx('collection-name')}>
                    <span>{data.name}</span>
                    {data.auth === true && <img className={cx('icon')} src={images.check} alt="" />}
                </div>
                <div className={cx('list-value')}>
                    <span className={cx('title')}>FLOOR</span>
                    <span className={cx('title')}>TOTAL VOLUME</span>
                    <span className={cx('value')}>{data.floor} ETH</span>
                    <span className={cx('value')}>{data.total_volume} ETH</span>
                </div>
            </div>
        </div>
    );
}

export default NotableCollectionItem;
