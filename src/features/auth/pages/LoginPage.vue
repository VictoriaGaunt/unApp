<template>
  <div class="auth-page">
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginForm } from '../components';

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    const handleLogin = (payload: { email: string; code: string }) => {
      // Логика отправки запроса на аутентификацию через authService
      console.log('Login payload:', payload);
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
