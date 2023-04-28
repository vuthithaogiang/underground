import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import MenuHeader from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <>
            <Tippy
                interactive
                delay={[0, 300]}
                render={(attrs) => (
                    <div className={cx('menu-items')} tabIndex={'-1'} {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <MenuHeader
                                    title="Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
                placement="bottom-end"
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
