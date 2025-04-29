<!-- pages/layouts/DashboardLayout.vue -->
<template>
  <div class="dashboard-layout">
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
  name: 'DashboardLayout',
});
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header, footer {
  background-color: #32063f;
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
  background: #f8f9fa;
  padding: 15px;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
