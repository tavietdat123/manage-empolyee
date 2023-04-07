import config from '../App/config';
import Home from '../App/Page/Home';
import Pending from '../App/Page/Pending';
import SignIn from '../App/Page/Sessions/SignIn';

const publicRoute = [
    { path: config.routesConfig.root, component: Home },
    { path: config.routesConfig.signin, component: SignIn, layout: null },
    { path: config.routesConfig.pending, component: Pending },
];
const privateRoute = [];
export { publicRoute, privateRoute };
