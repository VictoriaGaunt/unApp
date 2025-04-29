<!-- pages/components/Footer.vue -->
<template>
  <footer class="page-footer">
    <p>&copy; {{ currentYear }} My Awesome App. All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooter',
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
});
</script>

<style scoped>
.page-footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  font-size: 0.9em;
}
</style>
