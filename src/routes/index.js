import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UploadCollection from '~/pages/UploadCollection';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account/:walletaddress', component: Profile },
    { path: '/uploadNFT', component: UploadCollection },
];

const privateRoutes = [{ path: '/account/:walletaddress', component: Profile }];

export { publicRoutes, privateRoutes };
