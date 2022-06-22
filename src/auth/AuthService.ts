import axios from 'axios';
import { LoginRequest } from './models/LoginRequest';
import { LoginResponse } from './models/LoginResponse';
import { RegisterRequest } from './models/RegisterRequest';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.options = {
	'Access-Control-Allow-Origin':'*'
};
class AuthService {
	static JWT_TOKEN_KEY = 'JWT_TOKEN';
	static REFRESH_TOKEN_KEY = 'RERFESH_TOKEN';

	login(loginRequest: LoginRequest) {
		return fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
			method: 'post',
			body: JSON.stringify(loginRequest)
		}).then(response => response.json().then((data: LoginResponse) => {
			this.storeJWTToken(data.access_token);
			this.storeRefreshToken(data.refresh_token);
		}));
	}

	register(registerRequest: RegisterRequest) {
		return fetch(`${process.env.REACT_APP_API_URL}/user/v1/api/auth/register`, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(registerRequest)
		}).then((response) => response.json());
		// return axios.post(`${process.env.REACT_APP_API_URL}/user/register`, registerRequest);
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