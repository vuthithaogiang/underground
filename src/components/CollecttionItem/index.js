import classNames from 'classnames/bind';
import styles from './CollecttionItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CollectionItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src="https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1675276212794_udyhoo262r94nj9qxngi23fxjmcnuvp7_64x64.webp"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name-collection')}>
                    <span>Ape Sfers</span>
                    <img className={cx('icon-check')} src={images.check} alt="check" />
                </p>
                <span className={cx('quantity')}>5,438 items</span>
            </div>
        </div>
    );
}

export default CollectionItem;
