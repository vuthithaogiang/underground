import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <h2>Oopps</h2>
            <div className={cx('images')}>
                <img src={images.number4} alt="" />
                <img src={images.errorIcon} alt="" />
                <img src={images.number4} alt="" />
            </div>
            <p>We’re sorry, the page you requested could not be found Please go back to the homepage</p>
            <Button className={cx('back')} large={true} round={true} to="/">
                Back to Home page
            </Button>
        </div>
    );
}

export default NotFound;
