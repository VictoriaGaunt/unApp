<template>
  <div :class="$style.registrationWidget">
    <h3>Register</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RegistrationWidgetProps } from './RegistrationWidget.types';

export default defineComponent({
  name: 'RegistrationWidget',
  emits: ['register'],
  setup(_, { emit }) {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const onSubmit = () => {
      emit('register', {
        username: username.value,
        email: email.value,
        password: password.value,
      });
    };

    return { username, email, password, onSubmit };
  },
});
</script>

<style module lang="scss">
.registrationWidget {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      display: block;
      margin-bottom: 3px;
    }
    input {
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 8px 12px;
      cursor: pointer;
      align-self: flex-end;
    }
  }
}
</style>
