<template>
  <!-- Базовое текстовое поле ввода с поддержкой v-model -->
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="$style.input"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
});
</script>

<style module lang="scss">
.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: var(--primary-color, #0d6efd);
  }
}
</style>
