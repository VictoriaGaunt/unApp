<template>
  <!-- Базовая кнопка с поддержкой передачи типа и обработки кликов -->
  <button :type="type" :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
});
</script>

<style module lang="scss">
.button {
  padding: 10px 20px;
  background-color: var(--primary-color, #0d6efd);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: darken(var(--primary-color, #0d6efd), 10%);
  }
}
</style>
