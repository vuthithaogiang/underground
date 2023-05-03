import classNames from 'classnames/bind';
import styles from './NotableCollection.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { notableCollections } from '~/data';
import NotableCollectionItem from '~/components/NotableCollectionItem';

const cx = classNames.bind(styles);

function NotableCollection() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h2 className={cx('heading')}>
                    <strong>Notable</strong> Collection
                </h2>
            </header>

            <Carousel responsive={responsive} containerClass={cx('carousel-container')} showDots={false}>
                {notableCollections.map((item, index) => (
                    <NotableCollectionItem key={index} data={item} />
                ))}
            </Carousel>
        </div>
    );
}
export default NotableCollection;
