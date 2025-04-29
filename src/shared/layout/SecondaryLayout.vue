<template>
  <div :class="$style.secondaryLayout">
    <nav class="nav">
      <slot name="nav" />
    </nav>
    <section class="content">
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SecondaryLayout',
});
</script>

<style module lang="scss">
.secondaryLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}
.nav {
  background-color: #f8f9fa;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>