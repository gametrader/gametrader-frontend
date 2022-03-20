import { RegisterRequest } from './models/RegisterRequest';
import { LoginResponse } from './models/LoginResponse';
import { LoginRequest } from './models/LoginRequest';
import React from 'react';
import authService from './AuthService';
import axios from 'axios';

jest.mock("axios");

const JWT_TOKEN_KEY = 'JWT_TOKEN';
const REFRESH_TOKEN_KEY = 'RERFESH_TOKEN';

beforeEach(() => {
    localStorage.clear();
});

test('getJWTToken method should return JWT token if token is present', () => {
    const testJWTToken = 'test_token';
    localStorage.setItem(JWT_TOKEN_KEY, testJWTToken);

    const jwt = authService.getJWTToken();

    expect(jwt).toEqual(testJWTToken);
});

test('getJWTToken method should return null if token isnt present', () => {
    const jwt = authService.getJWTToken();

    expect(jwt).toBeNull();
});

test('getRefreshToken method should return refresh token if token is present', () => {
    const testRefreshToken = 'test_token';
    localStorage.setItem(REFRESH_TOKEN_KEY, testRefreshToken);

    const jwt = authService.getRefreshToken();

    expect(jwt).toEqual(testRefreshToken);
});

test('getRefreshToken method should return null if token isnt present', () => {
    const jwt = authService.getRefreshToken();

    expect(jwt).toBeNull();
});

test('login should store JWT and refresh token', async () => {
    const loginRequest: LoginRequest = {
        username: 'test',
        password: 'testpassword1'
    };
    const loginResponse: LoginResponse = {
        token: 'token',
        refresh: 'refresh'
    };
    (axios as any).post.mockResolvedValueOnce({data: loginResponse});

    const result = await authService.login(loginRequest);

    expect(result).toEqual(loginResponse);
    expect(authService.getJWTToken()).toEqual(loginResponse.token);
    expect(authService.getRefreshToken()).toEqual(loginResponse.refresh);
});

test('register should return register data', async () => {
    const registerRequest: RegisterRequest = {
        username: 'test',
        password: 'testpassword1',
        confirmPassword: 'testpassword1',
        dateOfBirth: new Date(),
        email: 'mail@mail.com',
        gender: 'M'
    };
    const registerResponse = { };
    (axios as any).post.mockResolvedValueOnce({ data: registerResponse });

    const result = await authService.register(registerRequest);

    expect(result).toEqual(registerResponse);
});

test('logout should delete tokens from localstorage', () => {
    localStorage.setItem(JWT_TOKEN_KEY, 'jwt_token');
    localStorage.setItem(REFRESH_TOKEN_KEY, 'refresh_token');

    authService.logout();

    expect(authService.getJWTToken()).toBeNull();
    expect(authService.getRefreshToken()).toBeNull();
});

test('refreshToken should store the refreshed token', async () => {
    const oldToken = 'old_jwt_token';
    const refreshToken = 'refresh_token';
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(JWT_TOKEN_KEY, oldToken);
    const refreshResponse: any = {
        token: 'refreshed_jwt_token'
    };

    (axios as any).post.mockResolvedValueOnce({ data: refreshResponse });

    const result = await authService.refreshToken();

    expect(axios.post).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/refresh-token`, { refreshToken: refreshToken });
    expect(result).toEqual(true);
    expect(authService.getJWTToken()).toEqual(refreshResponse.token);
});
