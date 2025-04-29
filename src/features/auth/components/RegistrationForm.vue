<template>
  <div class="registration-form">
    <h2>Registration</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" v-model.trim="username" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model.trim="email" required />
      </div>
      <div>
        <label for="password">Code</label>
        <input id="password" type="password" v-model="code" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RegistrationFormProps } from './RegistrationForm.types';

export default defineComponent({
  name: 'RegistrationForm',
  props: {},
  emits: ['register'],
  setup(_, { emit }) {
    const username = ref('');
    const email = ref('');
    const code = ref('');
    const onSubmit = () => {
      if (!username.value || !email.value || !code.value) return;
      emit('register', {
        username: username.value,
        email: email.value,
        code: code.value,
      });
    };
    return { username, email, code, onSubmit };
  },
});
</script>

<style scoped>
.registration-form {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
