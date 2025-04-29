<template>
  <div :class="$style.formWrapper">
    <form @submit.prevent="$emit('submit')">
      <slot />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormWrapper',
});
</script>

<style module lang="scss">
.formWrapper {
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
