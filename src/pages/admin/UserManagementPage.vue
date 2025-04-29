<!-- pages/admin/UserManagementPage.vue -->
<template>
  <div class="user-management">
    <h1>User Management</h1>
    <p>Manage application users here.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserManagementPage',
});
</script>

<style scoped>
.user-management {
  padding: 20px;
}
</style>
