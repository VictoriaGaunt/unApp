<!-- pages/components/Sidebar.vue -->
<template>
  <aside class="page-sidebar">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSidebar',
});
</script>

<style scoped>
.page-sidebar {
  background-color: #e9ecef;
  padding: 15px;
}
.page-sidebar ul {
  list-style: none;
  padding: 0;
}
.page-sidebar li {
  margin-bottom: 10px;
}
</style>
