import axios from 'axios';
// import authService from '../AuthService';

const ErrorInterceptor = () => {
    axios.interceptors.request.use(
        request => request,
        error => {
            // TODO implement refreshing token when backend returns 401
            if (error.response.status === 401) {
                console.log('Token expired!')
            }
        }
    );
};

export default ErrorInterceptor;