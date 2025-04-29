<template>
  <aside :class="$style.sidebar">
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
</script>

<style module lang="scss">
.sidebar {
  background-color: #e9ecef;
  padding: 15px;
  min-width: 200px;
}
</style>
