<!-- pages/auth/RegistrationPage.vue -->
<template>
  <div class="auth-page">
    <h1>Register</h1>
    <RegistrationForm @register="handleRegister" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RegistrationForm } from '../../features/auth/components';

export default defineComponent({
  name: 'RegistrationPage',
  components: { RegistrationForm },
  setup() {
    const handleRegister = (payload: { username: string; email: string; code: string }) => {
      console.log('Registration payload:', payload);
      // Логика регистрации через authService
    };

    return { handleRegister };
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
