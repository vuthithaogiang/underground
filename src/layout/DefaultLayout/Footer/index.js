import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Underground.</h2>
                <div>
                    <span>Ready to get started? </span>
                    <Button outline={true}>Get Started</Button>
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx('column')}>
                    <h3>Subcribe to our newsletter</h3>
                    <div className={cx('form-group')}>
                        <input type="email" placeholder="Your Email address" />
                        <figure>
                            <img src={images.arrow} alt="" />
                        </figure>
                    </div>
                    <div className={cx('socials')}>
                        <div>
                            <img src={images.facebookIcon} alt="" />
                        </div>
                        <div>
                            <img src={images.twitterIcon} alt="" />
                        </div>
                        <div>
                            <img src={images.linkInIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className={cx('column')}>
                    <h3>Services</h3>
                    <h4>Collection</h4>
                    <h4>Item</h4>
                    <h4>Wallet</h4>
                    <h4>Category</h4>
                    <h4>Online</h4>
                </div>

                <div className={cx('column')}>
                    <h3>About</h3>
                    <h4>Our Story</h4>
                    <h4>Benefits</h4>
                    <h4>Team</h4>
                    <h4>Careers</h4>
                </div>
                <div className={cx('column')}>
                    <h3>Help</h3>
                    <h4>FAQs</h4>
                    <h4>Contact us</h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;
