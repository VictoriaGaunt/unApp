<!-- pages/errors/Unauthorized.vue -->
<template>
  <div class="unauthorized">
    <h1>Unauthorized</h1>
    <p>You do not have permission to access this page.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Unauthorized',
});
</script>

<style scoped>
.unauthorized {
  text-align: center;
  padding: 40px;
}
</style>
