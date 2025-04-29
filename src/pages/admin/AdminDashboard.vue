<!-- pages/admin/AdminDashboard.vue -->
<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <p>Welcome, admin.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminDashboard',
});
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
}
</style>
