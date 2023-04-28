import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [{ path: '/', component: Home }];

const privateRoutes = [{ path: '/profile/:walletaddress', component: Profile }];

export { publicRoutes, privateRoutes };
