import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faGear,
    faWandMagicSparkles,
    faLayerGroup,
    faCircleInfo,
    faQuestion,
    faWallet,
    faCartShopping,
    faXmark,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CollectionItem from '~/components/CollecttionItem';
import Button from '~/components/Button';
//import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import { connectMetaMaskService } from '~/services/metaService';
import { useRecoilState } from 'recoil';
import { connectMetaMaskState } from '~/global-state/connect-metamask';
import useOnClickOutside from '~/hooks/useOnClickOutside';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faIdBadge} />,
        title: 'My Account',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'About Us',
        to: '/aboutus',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback & Helps',
        to: '/contactus',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/account-setting',
    },
];

const MENU_DISCOVER = [
    {
        title: 'All Collections',
        to: '/collection',
    },
    {
        title: 'All Items',
        to: '/NFT-details',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faIdBadge} />,
        title: 'My Account',
        to: '/account/:addressWallet',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'About Us',
        to: '/aboutus',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback & Helps',
        to: '/contactus',
    },
    {
        icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
        title: 'Create Item',
        to: '/uploadItem',
    },
    {
        icon: <FontAwesomeIcon icon={faLayerGroup} />,
        title: 'Create Collection',
        to: '/uploadNFT',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/account-setting',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Disconect',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 3]);
    //     }, 2000);
    // }, []);
    const [modal, setModal] = useState(false);
    const [metaMask, setMetaMask] = useRecoilState(connectMetaMaskState);
    const refModal = useRef();
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    useOnClickOutside(refModal, toggleModal);
    const handleConectMetaMask = async () => {
        const response = await connectMetaMaskService();
        setMetaMask((prev) => {
            return { ...prev, ...response };
        });
        toggleModal();
    };
    const currentUser = metaMask.isLogin;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img className={cx('img-logo')} src={images.logo} alt="Underground" />
                    <h4 className={cx('title-logo')}>Underground</h4>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={'-1'} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Collection</h4>
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search items" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div className={cx('discover-items')} tabIndex={'-1'} {...attrs}>
                                <PopperWrapper>
                                    {MENU_DISCOVER.map((item, index) => {
                                        return <MenuItem className={cx('discover-item')} key={index} item={item} />;
                                    })}
                                </PopperWrapper>
                            </div>
                        )}
                        placement="bottom-end"
                    >
                        <span className={cx('discover')}>Discover</span>
                    </Tippy>

                    <Button
                        onClick={toggleModal}
                        className={cx('wallet-btn')}
                        leftIcon={<FontAwesomeIcon icon={faWallet} />}
                    ></Button>

                    {modal && (
                        <div className={cx('modal')} ref={refModal}>
                            <div className={cx('overlay')} onClick={toggleModal}></div>
                            <div className={cx('modal-content')}>
                                <div className={cx('modal-inner')}>
                                    <h4 className={cx('modal-header')}>
                                        Connect your wallet
                                        <FontAwesomeIcon
                                            className={cx('modal-clear')}
                                            icon={faXmark}
                                            onClick={toggleModal}
                                        />
                                    </h4>
                                    <p className={cx('modal-desc')}>
                                        If you do not have any wallet, you can select a provider and create one now.
                                    </p>
                                    <div className={cx('modal-item')} onClick={handleConectMetaMask}>
                                        <img className={cx('modal-icon')} src={images.metamask} alt="metamask" />
                                        <p>MetaMask</p>
                                        <span>Popular</span>
                                    </div>
                                    <div className={cx('modal-item')}>
                                        <img
                                            className={cx('modal-icon')}
                                            src={images.coinbasewallet}
                                            alt="coinbase wallet"
                                        />
                                        <p>Coinbase Wallet</p>
                                        <span>Solana</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Button className={cx('cart-btn')} leftIcon={<FontAwesomeIcon icon={faCartShopping} />}></Button>

                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Menu items={USER_MENU}>
                                <img
                                    className={cx('avatar')}
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1679847981481-H74EHYH5P4B340WBPCOU/_MG_5303-Edit-2.jpg?format=300w"
                                    alt=""
                                />
                            </Menu>
                        </div>
                    ) : (
                        <Menu items={MENU_ITEMS}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
