import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { connectMetaMaskState } from '~/global-state/connect-metamask';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import axiosClient from '~/untils/axiosClient';

const cx = classNames.bind(styles);

function MenuItem({ className, item, onClick }) {
    const classes = cx('menu-item', {
        [className]: className,
        separate: item.separate,
    });
    const [metaMask, setMetaMask] = useRecoilState(connectMetaMaskState);
    const resetMetaMask = useResetRecoilState(connectMetaMaskState);
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await axiosClient.get('/auth/logout');
        if (response.status === 200) {
            resetMetaMask();
            navigate('/');
            window.location.reload();
        }
    };

    if (!item.separate) {
        return (
            <Button className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
                {item.title}
            </Button>
        );
    } else {
        return (
            <Button className={classes} leftIcon={item.icon} to={item.to} onClick={handleLogout}>
                {item.title}
            </Button>
        );
    }
}

export default MenuItem;
