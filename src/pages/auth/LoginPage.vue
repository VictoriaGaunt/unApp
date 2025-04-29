<!-- pages/auth/LoginPage.vue -->
<template>
  <div class="auth-page">
    <h1>Login</h1>
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginForm } from '../../features/auth/components'; // Предположим, что LoginForm импортируется из фичи auth

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    const handleLogin = (payload: { email: string; code: string }) => {
      console.log('Login payload:', payload);
      // Логика авторизации через сервис (например, authService)
    };

    return { handleLogin };
  },
});
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
