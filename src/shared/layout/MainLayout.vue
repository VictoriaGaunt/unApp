<template>
  <div>
    <header>
      <nav aria-label="Основное меню">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Авторизация</router-link>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>© 2025 Your Company</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped>
/* Стили для макета можно добавить здесь */
</style>
