<!-- pages/public/AboutPage.vue -->
<template>
  <div class="about-page">
    <header>
      <h1>About Us</h1>
    </header>
    <main>
      <p>Learn more about our company, mission, and team.</p>
    </main>
    <footer>
      <p>&copy; 2023 My Awesome App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
});
</script>

<style scoped>
.about-page {
  padding: 20px;
  text-align: center;
}
</style>
