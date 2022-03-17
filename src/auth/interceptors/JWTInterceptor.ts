import axios from 'axios';
import authService from '../AuthService';

const JWTInterceptor = () => {
    axios.interceptors.request.use(request => {
        if (request.url.startsWith(process.env.REACT_APP_API_URL) && authService.getJWTToken() != null) {
            (request.headers as any).common['Authorization'] = `Bearer ${authService.getJWTToken()}`;
        }
        return request;
    });
};

export default JWTInterceptor;