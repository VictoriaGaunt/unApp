<template>
  <label :class="$style.radio">
    <input type="radio" :value="value" :checked="modelValue === value" @change="$emit('update:modelValue', value)" />
    <span class="radio-mark"></span>
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseRadio',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.radio {
  display: flex;
  align-items: center;
  input {
    margin-right: 8px;
  }
}
</style>
