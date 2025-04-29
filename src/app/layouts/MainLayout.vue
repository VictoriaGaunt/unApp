<template>
  <!-- Основной макет приложения: включает шапку, основной контент (slot) и футер -->
  <div class="main-layout">
    <header class="header">
      <!-- Здесь можно использовать глобальные компоненты или собственную разметку -->
      <h1>{{ title }}</h1>
    </header>
    <main class="content">
      <slot />
    </main>
    <footer class="footer">
      <p>&copy; {{ currentYear }} My Awesome App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const title = ref('My Awesome App');
    const currentYear = new Date().getFullYear();
    return { title, currentYear };
  },
});
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: #32063f;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #f1f1f1;
  color: #333;
  padding: 10px;
  text-align: center;
  font-size: 0.9em;
}
</style>
