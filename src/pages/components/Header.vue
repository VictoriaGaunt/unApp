<!-- pages/components/Header.vue -->
<template>
  <header class="page-header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: 'My Awesome App',
    },
  },
});
</script>

<style scoped>
.page-header {
  background-color: #0d6efd;
  color: #fff;
  padding: 15px;
  text-align: center;
}
</style>
