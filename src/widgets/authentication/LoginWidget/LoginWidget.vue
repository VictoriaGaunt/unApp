<template>
  <div :class="$style.loginWidget">
    <h3>Login</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LoginWidgetProps } from './LoginWidget.types';

export default defineComponent({
  name: 'LoginWidget',
  emits: ['login'],
  setup(_, { emit }) {
    const email = ref('');
    const password = ref('');

    const onSubmit = () => {
      emit('login', { email: email.value, password: password.value });
    };

    return { email, password, onSubmit };
  },
});
</script>

<style module lang="scss">
.loginWidget {
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
