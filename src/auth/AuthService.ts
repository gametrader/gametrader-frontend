import axios from 'axios';
import { LoginRequest } from './models/LoginRequest';
import { LoginResponse } from './models/LoginResponse';
import { RegisterRequest } from './models/RegisterRequest';

class AuthService {
    static JWT_TOKEN_KEY = 'JWT_TOKEN';
    static REFRESH_TOKEN_KEY = 'RERFESH_TOKEN';

    login(loginRequest: LoginRequest) {
        return axios.post<LoginResponse>(`${process.env.REACT_APP_API_URL}/login`, loginRequest)
            .then(response => {
                if (response.data.token) {
                    this.storeJWTToken(response.data.token);
                    this.storeRefreshToken(response.data.refresh);
                }
                return response.data;
            });
    }

    register(registerRequest: RegisterRequest) {
        return axios.post(`${process.env.REACT_APP_API_URL}/register`, registerRequest);
    }

    logout() {
        this.deleteJWTToken();
        this.deleteRefreshToken();
    }

    refreshToken() {
        return axios.post(`${process.env.REACT_APP_API_URL}/refresh-token`, { refreshToken: this.getRefreshToken() })
            .then(response => {
                if (response.data.token) {
                    this.storeJWTToken(response.data.token);
                    return true;
                }
                return false;
            });
    }

    getJWTToken(): string {
        return localStorage.getItem(AuthService.JWT_TOKEN_KEY);
    }

    getRefreshToken(): string {
        return localStorage.getItem(AuthService.REFRESH_TOKEN_KEY);
    }

    private storeJWTToken(token: string) {
        localStorage.setItem(AuthService.JWT_TOKEN_KEY, token);
    }

    private deleteJWTToken() {
        localStorage.removeItem(AuthService.JWT_TOKEN_KEY);
    }

    private storeRefreshToken(token: string) {
        localStorage.setItem(AuthService.REFRESH_TOKEN_KEY, token);
    }

    private deleteRefreshToken() {
        localStorage.removeItem(AuthService.REFRESH_TOKEN_KEY);
    }
}

export default new AuthService();