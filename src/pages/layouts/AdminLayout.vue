<!-- pages/layouts/AdminLayout.vue -->
<template>
  <div class="admin-layout">
    <header>
      <slot name="header" />
    </header>
    <div class="content-wrapper">
      <aside>
        <slot name="sidebar" />
      </aside>
      <main>
        <slot />
      </main>
    </div>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminLayout',
});
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header, footer {
  background-color: #212529;
  color: #fff;
  padding: 10px;
  text-align: center;
}
.content-wrapper {
  display: flex;
  flex: 1;
}
aside {
  width: 250px;
  background: #343a40;
  padding: 15px;
  color: #fff;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
