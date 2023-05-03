import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Introduction from './Introduction';
import Trending from './Trending';

const cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx('container')}>
            <Introduction />
            <Trending />
        </main>
    );
}

export default Home;
