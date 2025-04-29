<template>
  <div class="auth-page">
    <RegistrationForm @register="handleRegister" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RegistrationForm } from '../components';

export default defineComponent({
  name: 'RegistrationPage',
  components: { RegistrationForm },
  setup() {
    const handleRegister = (payload: { username: string; email: string; code: string }) => {
      // Логика регистрации через authService
      console.log('Registration payload:', payload);
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
