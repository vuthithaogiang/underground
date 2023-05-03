import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Introduction from './Introduction';
import Trending from './Trending';
import NotableCollection from './NotableCollections';
import ArtSpotlightCollections from './ArtSpotlightCollections';
import Features from './Features';
import Categories from './Categories';

const cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx('container')}>
            <Introduction />
            <Trending />
            <NotableCollection />
            <ArtSpotlightCollections />
            <Features />
            <Categories />
        </main>
    );
}

export default Home;
