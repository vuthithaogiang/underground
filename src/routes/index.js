import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UploadCollection from '~/pages/UploadCollection';
import NotFound from '~/pages/NotFound';
import Collection from '~/pages/Collection';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account/:walletaddress', component: Profile },
    { path: '/uploadNFT', component: UploadCollection },
    { path: '/collection', component: Collection },
    { path: '*', component: NotFound },
];

const privateRoutes = [{ path: '/account/:walletaddress', component: Profile }];

export { publicRoutes, privateRoutes };
