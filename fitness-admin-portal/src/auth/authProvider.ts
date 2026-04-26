import { AuthProvider } from 'react-admin';
import apiSource from '../config/apiSource';

export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        const apiUrl = apiSource;
        const request = new Request(`${apiUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('token', auth.token);
                localStorage.setItem('user', JSON.stringify(auth.user));
            })
            .catch(() => {
                throw new Error('Network error or invalid credentials');
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return Promise.resolve(user.role);
    },
    getIdentity: () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return Promise.resolve({
            id: user.id,
            fullName: user.nama,
            avatar: undefined,
        });
    },
};
