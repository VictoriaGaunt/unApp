<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model.trim="email" required />
      </div>
      <div>
        <label for="password">Code</label>
        <input id="password" type="password" v-model="code" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LoginFormProps } from './LoginForm.types';

export default defineComponent({
  name: 'LoginForm',
  props: {},
  emits: ['login'],
  setup(_, { emit }) {
    const email = ref('');
    const code = ref('');
    const onSubmit = () => {
      if (!email.value || !code.value) return;
      emit('login', { email: email.value, code: code.value });
    };
    return { email, code, onSubmit };
  },
});
</script>

<style scoped>
.login-form {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
