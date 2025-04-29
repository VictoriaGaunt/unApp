<template>
  <div :class="$style.mainLayout">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="content">
      <slot />
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style module lang="scss">
.mainLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  background-color: var(--primary-color, #0d6efd);
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
  text-align: center;
  padding: 10px;
}
</style>
