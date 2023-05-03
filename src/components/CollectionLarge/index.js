import classNames from 'classnames/bind';
import styles from './CollectionLarge.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CollectionLarge({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('thumb')} src={data.imageId} alt="" />
                <div className={cx('content')}>
                    <div className={cx('name-collection')}>
                        <p>{data.name}</p>
                        {data.auth === true && <img className={cx('icon')} src={images.check} alt="" />}
                    </div>
                    <span className={cx('floor')}>Floor: {data.floor} ETH</span>
                </div>
            </div>
        </div>
    );
}

export default CollectionLarge;
