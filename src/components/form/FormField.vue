<template>
  <div :class="$style.formField">
    <label v-if="label" :for="id" :class="$style.label">{{ label }}</label>
    <slot />
    <div v-if="error" :class="$style.error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormField',
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
});
</script>

<style module lang="scss">
.formField {
  margin-bottom: 15px;
  .label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .error {
    color: red;
    font-size: 0.85em;
    margin-top: 5px;
  }
}
</style>
