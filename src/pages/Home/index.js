import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Introduction from './Introduction';
import Trending from './Trending';
import NotableCollection from './NotableCollections';

const cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx('container')}>
            <Introduction />
            <Trending />
            <NotableCollection />
        </main>
    );
}

export default Home;
