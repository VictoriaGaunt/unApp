import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/authStore';

export function useAuth() {
    const authStore = useAuthStore();
    const isLoggedIn = ref(authStore.isAuthenticated);

    onMounted(() => {
        isLoggedIn.value = authStore.isAuthenticated;
    });

    return { authStore, isLoggedIn };
}
