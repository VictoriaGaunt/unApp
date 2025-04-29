<template>
  <!-- Альтернативный макет с другим оформлением -->
  <div class="alt-layout">
    <nav class="alt-nav">
      <!-- Пример альтернативной навигации -->
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <section class="alt-content">
      <slot />
    </section>
    <div class="alt-footer">
      <p>Alternative Layout &copy; {{ currentYear }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlternativeLayout',
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
});
</script>

<style scoped lang="scss">
.alt-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: #eaeaea;
}

.alt-nav {
  background-color: #0d6efd;
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    li a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.alt-content {
  padding: 20px;
}

.alt-footer {
  background-color: #0d6efd;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
