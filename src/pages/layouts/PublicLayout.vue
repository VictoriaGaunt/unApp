<!-- pages/layouts/PublicLayout.vue -->
<template>
  <div class="public-layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PublicLayout',
});
</script>

<style scoped>
.public-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header, footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
