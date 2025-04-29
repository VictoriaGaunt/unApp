<template>
  <label :class="$style.checkbox">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
    <span class="checkmark"></span>
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style module lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  input {
    margin-right: 8px;
  }
}
</style>
