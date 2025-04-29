<!-- pages/auth/PasswordRecoveryPage.vue -->
<template>
  <div class="auth-page">
    <h1>Password Recovery</h1>
    <form @submit.prevent="recoverPassword">
      <div>
        <label for="email">Enter your email</label>
        <input id="email" type="email" v-model="email" required />
      </div>
      <button type="submit">Recover Password</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PasswordRecoveryPage',
  setup() {
    const email = ref('');

    const recoverPassword = () => {
      console.log('Recover password for:', email.value);
      // Логика восстановления пароля через API
    };

    return { email, recoverPassword };
  },
});
</script>

<style scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
form {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
