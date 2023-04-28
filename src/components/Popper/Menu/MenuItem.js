import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ className, item, onClick }) {
    return (
        <Button className={cx('menu-item', className)} leftIcon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    );
}

export default MenuItem;
