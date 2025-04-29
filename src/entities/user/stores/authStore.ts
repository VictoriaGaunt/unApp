import { defineStore } from 'pinia';
import { IUser } from '../models/User.types';

/**
 * Хранилище для аутентификации и авторизации пользователя.
 */
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as IUser | null,
        token: '' as string,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        login(user: IUser, token: string) {
            this.user = user;
            this.token = token;
        },
        logout() {
            this.user = null;
            this.token = '';
        },
    },
});
