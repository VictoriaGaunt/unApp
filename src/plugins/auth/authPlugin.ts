import { App } from 'vue';
import { useAuthStore } from '@/entities/user/stores/authStore';

export default {
    install(app: App, options?: Record<string, any>) {
        // Пример: глобальный миксин для проверки авторизации
        app.mixin({
            mounted() {
                const authStore = useAuthStore();
                if (authStore.token) {
                    console.log('User is authenticated.');
                }
            },
        });

        // Можно также добавить глобальные методы
        app.config.globalProperties.$auth = {
            getToken() {
                const authStore = useAuthStore();
                return authStore.token;
            },
            isAuthenticated() {
                const authStore = useAuthStore();
                return authStore.isAuthenticated;
            },
        };
    },
};