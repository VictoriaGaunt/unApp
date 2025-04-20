import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';

interface User {
    username: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        token: null as string | null,
        sessionTimer: 0 as number | null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
            async login(username: string, password: string) {
            try {
                    const response = await axios.post<{ token: string; user: User }>(
                    '/api/login',
                    { username, password }
                );
                this.token = response.data.token;
                this.user = response.data.user;
                localStorage.setItem('token', this.token);
                this.startSessionTimer();

            } catch (error) {
                throw error;
            }
        },
        manualLogin(user: User) {
            this.user = user;
            this.token = null;
            this.startSessionTimer();
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
            this.clearSessionTimer();
            router.push('/splash');
        },
        startSessionTimer() {
            this.clearSessionTimer();
            this.sessionTimer = window.setTimeout(() => {
                this.logout();
            }, 900000);
        },
        clearSessionTimer() {
            if (this.sessionTimer) {
                clearTimeout(this.sessionTimer);
                this.sessionTimer = null;
            }
        },
        resetSessionTimer() {
            if (this.isAuthenticated) {
                this.startSessionTimer();
            }
        },
    },
});