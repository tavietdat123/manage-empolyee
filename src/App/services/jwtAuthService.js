import axios from 'axios';
import localStorageService from './localStorageService';
import config from '../config';
const configHeader = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic Y29yZV9jbGllbnQ6c2VjcmV0',
    },
};
class JwtAuthService {
    async getCurrentUser() {
        let url = config.API_ENPOINT + '/api/users/getCurrentUser';
        return await axios.get(url);
    }
    async loginWithUserNameAndPassword({ username, password }) {
        let requestBody = 'client_id=core_client&grant_type=password&client_secret=secret';
        requestBody = requestBody + '&username=' + username + '&password=' + password;
        const res = await axios
            .post(config.API_ENPOINT + '/oauth/token', requestBody, configHeader)
            .then((response) => {
                console.log(response);
                var dateObj = new Date(Date.now() + response.data.expires_in * 1000);
                localStorageService.setItem('token_expire_time', dateObj);
                this.setSession(response.data.access_token);
            });

        //alert('Here')
        await this.getCurrentUser().then((res) => {
            console.log('current Usser', res);
            this.setLoginUser(res.data);
        });

        // await MenuService.getAllMenuItemByRoleList().then(res=>{
        //   //localStorageService.setSessionItem("navigations",res.data);
        //   localStorageService.setLocalStorageItem("navigations",res.data);
        // });
    }
    setSession(token) {
        if (token) {
            localStorageService.setItem('jwt_token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } else {
            localStorageService.removeItem('jwt_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    }
    async setLoginUser(user) {
        localStorageService.setItem('auth_user', user);
        return user;
    }
}
export default new JwtAuthService();
