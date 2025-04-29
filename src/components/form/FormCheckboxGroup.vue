<template>
  <FormField :label="label" :error="error">
    <div class="checkbox-group">
      <label v-for="option in options" :key="option.value" :class="$style.checkboxLabel">
        <input type="checkbox"
               :value="option.value"
               :checked="isChecked(option.value)"
               @change="onCheckboxChange($event, option.value)" />
        {{ option.text }}
      </label>
    </div>
  </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormField from './FormField.vue';

export default defineComponent({
  name: 'FormCheckboxGroup',
  components: { FormField },
  props: {
    label: { type: String, default: '' },
    modelValue: {
      type: Array as () => Array<string | number>,
      default: () => [],
    },
    options: {
      type: Array as () => Array<{ value: string | number; text: string }>,
      default: () => [],
    },
    error: { type: String, default: '' },
  },
  methods: {
    isChecked(value: string | number): boolean {
      return this.modelValue.includes(value);
    },
    onCheckboxChange(event: Event, value: string | number) {
      const checked = (event.target as HTMLInputElement).checked;
      let newValue = [...this.modelValue];
      if (checked) {
        newValue.push(value);
      } else {
        newValue = newValue.filter((v) => v !== value);
      }
      this.$emit('update:modelValue', newValue);
    },
  },
});
</script>

<style module lang="scss">
.checkboxLabel {
  display: flex;
  align-items: center;
  margin-right: 10px;
  input {
    margin-right: 5px;
  }
}
</style>
