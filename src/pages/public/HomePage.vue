<!-- pages/public/HomePage.vue -->
<template>
  <div class="home-page">
    <header>
      <h1>Welcome to My Awesome App</h1>
    </header>
    <main>
      <p>This is the home page, accessible to all users.</p>
    </main>
    <footer>
      <p>&copy; 2023 My Awesome App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}
</style>
