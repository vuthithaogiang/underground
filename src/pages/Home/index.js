import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Introduction from './Introduction';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <Introduction />
        </div>
    );
}

export default Home;
