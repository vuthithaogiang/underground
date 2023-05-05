import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Dashboard() {
    const itemActivity = [
        {
            event: 'Transfer',
            icon: images.transferIcon,
            price: null,
            from: 'ToddysTreats',
            to: 'nftinitcom_nevermore',
            date: '11h ago',
        },
        {
            event: 'Sale',
            icon: images.saleIcon,
            price: 111849,
            from: 'ToddysTreats',
            to: 'nftinitcom_nevermore',
            date: '11h ago',
        },
        {
            event: 'Transfer',
            icon: images.transferIcon,
            price: null,
            from: 'E52CEC',
            to: 'ToddysTreats',
            date: '1d ago',
        },
        {
            event: 'Transfer',
            icon: images.transferIcon,
            price: null,
            from: 'ToddysTreats',
            to: 'E52CEC',
            date: '3mo ago',
        },
        {
            event: 'Minted',
            icon: images.offerIcon,
            price: null,
            from: 'NullAddress',
            to: 'ToddysTreats',
            date: '2y ago',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <h2>
                        Integrated <strong>designed</strong> for product teams
                    </h2>
                    <p className={cx('desc')}>
                        Discover breakeven targets, profit potential and realized gain in ETH and USD (real time)
                        values. Lifetime access provided to all underground members.
                    </p>

                    <div className={cx('list-dashboard')}>
                        <div className={cx('dashboard-item')}>
                            <img src={images.dashboardIcon1} alt="" />
                            <span>Quick action</span>
                        </div>

                        <div className={cx('dashboard-item')}>
                            <img src={images.dashboardIcon2} alt="" />
                            <span>Quick action</span>
                        </div>

                        <div className={cx('dashboard-item')}>
                            <img src={images.dashboardIcon3} alt="" />
                            <span>Quick action</span>
                        </div>

                        <div className={cx('dashboard-item')}>
                            <img src={images.dashboardIcon4} alt="" />
                            <span>Quick action</span>
                        </div>

                        <div className={cx('dashboard-item')}>
                            <img src={images.dashboardIcon5} alt="" />
                            <span>Quick action</span>
                        </div>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('item-activity')}>
                        <h4>Dashboard Item Activity</h4>
                        <div className={cx('item-activity-nav')}>
                            <span>Event</span>
                            <span>Price</span>
                            <span>From</span>
                            <span>To</span>
                            <span>Date</span>
                        </div>
                        <div className={cx('item-activity-inner')}>
                            {itemActivity.map((item, index) => {
                                return (
                                    <div className={cx('detail-inner')} key={index}>
                                        <div className={cx('child', 'icon')}>
                                            <img src={item.icon} alt="" />
                                            <span>{item.event}</span>
                                        </div>
                                        <span className={cx('child')}>{item.price}</span>
                                        <span className={cx('child')}>{item.from}</span>
                                        <span className={cx('child')}>{item.to}</span>
                                        <span className={cx('child')}>{item.date}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('price-history')}>
                        <div className={cx('price-history-top')}>
                            <div className={cx('title')}>
                                <img src={images.check} alt="" />
                                <h4>Mint monitors</h4>
                            </div>
                            <p>Locate the hottest mints and access everything with one click.</p>
                        </div>
                        <div className={cx('price-history-bottom')}>
                            <img src={images.decorDashboard} alt="" />
                            <figure>
                                <img src={images.stats} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className={cx('team')}>
                        <h4>Team</h4>
                        <div className={cx('members')}>
                            <div className={cx('member')}>
                                <img className={cx('avatar')} src={images.team1} alt="" />
                                <p className={cx('name')}>John Smith</p>
                            </div>
                            <div className={cx('member')}>
                                <img className={cx('avatar')} src={images.team2} alt="" />
                                <p className={cx('name')}>Doplace kin</p>
                            </div>

                            <div className={cx('member')}>
                                <img className={cx('avatar')} src={images.team3} alt="" />
                                <p className={cx('name')}>Roblik Plah</p>
                            </div>
                            <div className={cx('member')}>
                                <img className={cx('avatar')} src={images.team4} alt="" />
                                <p className={cx('name')}>Tadka loise</p>
                            </div>
                            <div className={cx('member')}>
                                <img className={cx('avatar')} src={images.team5} alt="" />
                                <p className={cx('name')}>Maisis paul</p>
                            </div>
                        </div>
                        <Button primary={true}>View us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
