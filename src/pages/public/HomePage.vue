<template>
  <div class="home-page" @click="onUserActivity">
    <h1>Главная страница</h1>
    <p v-if="user">Добро пожаловать, {{ user.username }}!</p>
    <!-- Остальной контент главной страницы -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useAuthStore } from '@/entities/auth/authStore';
import apiClient from '@/shared/apiClient';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const authStore = useAuthStore();
    // Локальная реактивная переменная для пользователя
    const user = ref(authStore.user);

    // Функция получения данных пользователя, если они не загружены
    const fetchUserData = async () => {
      try {
        const response = await apiClient.get('https://questbet.win:2053/api/auth/register');
        if (response.data && response.data.user) {
          authStore.login(response.data.user.username, '');
          user.value = response.data.user;
        }
      } catch (e) {
        console.error('Ошибка при получении данных пользователя:', e);
      }
    };

    // При монтировании, если данные отсутствуют, выполняем запрос
    onMounted(() => {
      if (!user.value) {
        fetchUserData();
      }
      // Устанавливаем глобальный обработчик кликов для сброса таймера сессии
      window.addEventListener('click', authStore.resetSessionTimer);
    });

    return { user };
  },
});
</script>

<style scoped>
.home-page {
  text-align: center;
}
</style>
