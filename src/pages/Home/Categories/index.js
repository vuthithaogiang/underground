import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { categoryCollection } from '~/data';
import images from '~/assets/images';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CollectionLarge from '~/components/CollectionLarge';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Categories() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [collection, setCollection] = useState(categoryCollection);

    const handleSetAllCollection = () => {
        setStateActive(1);
        setCollection(categoryCollection);
    };

    const handleSetArtCollection = () => {
        const filtered = categoryCollection.filter((item) => item.categoryId === 1);
        setStateActive(2);
        setCollection(filtered);
    };

    const handleSetSportCollection = () => {
        const filtered = categoryCollection.filter((item) => item.categoryId === 2);
        setStateActive(3);
        setCollection(filtered);
    };

    const [stateActive, setStateActive] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div
                        className={stateActive === 1 ? cx('btn-actions', 'active') : cx('btn-actions')}
                        onClick={handleSetAllCollection}
                    >
                        All
                    </div>
                    <div
                        className={stateActive === 2 ? cx('btn-actions', 'active') : cx('btn-actions')}
                        onClick={handleSetArtCollection}
                    >
                        Art
                    </div>
                    <div
                        className={stateActive === 3 ? cx('btn-actions', 'active') : cx('btn-actions')}
                        onClick={handleSetSportCollection}
                    >
                        Sport
                    </div>
                </div>
                <div className={cx('list-collection')}>
                    <Carousel responsive={responsive} containerClass={cx('carousel-container')} showDots={false}>
                        {collection.map((item, index) => (
                            <CollectionLarge key={index} data={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Categories;
