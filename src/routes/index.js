import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account/:walletaddress', component: Profile },
];

const privateRoutes = [{ path: '/account/:walletaddress', component: Profile }];

export { publicRoutes, privateRoutes };
