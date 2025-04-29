<template>
  <header :class="$style.header">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style module lang="scss">
.header {
  background-color: #32063f;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
