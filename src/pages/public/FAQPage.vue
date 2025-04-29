<!-- pages/public/FAQPage.vue -->
<template>
  <div class="faq-page">
    <header>
      <h1>Frequently Asked Questions</h1>
    </header>
    <main>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <h3>{{ faq.question }}</h3>
        <p>{{ faq.answer }}</p>
      </div>
    </main>
    <footer>
      <p>&copy; 2023 My Awesome App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FAQPage',
  setup() {
    const faqs = ref([
      { question: 'What is My Awesome App?', answer: 'It is a demo application.' },
      { question: 'How do I register?', answer: 'Click on the registration link in the header.' },
    ]);
    return { faqs };
  },
});
</script>

<style scoped>
.faq-page {
  padding: 20px;
}
.faq-item {
  margin-bottom: 20px;
}
</style>
