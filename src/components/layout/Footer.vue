<template>
  <footer :class="$style.footer">
    <slot />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style module lang="scss">
.footer {
  background-color: #f1f1f1;
  color: #333;
  padding: 15px;
  text-align: center;
  font-size: 0.9em;
}
</style>
