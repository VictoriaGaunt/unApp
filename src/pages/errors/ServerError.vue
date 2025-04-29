<!-- pages/errors/ServerError.vue -->
<template>
  <div class="server-error">
    <h1>500 - Server Error</h1>
    <p>Something went wrong on our end.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServerError',
});
</script>

<style scoped>
.server-error {
  text-align: center;
  padding: 40px;
}
</style>
