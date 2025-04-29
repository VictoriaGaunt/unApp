<!-- pages/public/ContactPage.vue -->
<template>
  <div class="contact-page">
    <header>
      <h1>Contact Us</h1>
    </header>
    <main>
      <p>Please fill out the form below to get in touch with us.</p>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="form.email" type="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
    <footer>
      <p>&copy; 2023 My Awesome App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: '',
    });

    const submitForm = () => {
      console.log('Form submitted:', form);
      // Реализуйте логику отправки данных на сервер
    };

    return { form, submitForm };
  },
});
</script>

<style scoped>
.contact-page {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
