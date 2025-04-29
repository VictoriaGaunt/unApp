<template>
  <div class="default-layout">
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
  name: 'DefaultLayout',
});
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  background-color: #32063f;
  color: #fff;
  padding: 20px;
}
main {
  flex: 1;
  padding: 20px;
}
footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}
</style>
