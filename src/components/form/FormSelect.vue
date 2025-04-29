<template>
  <FormField :label="label" :id="id" :error="error">
    <select :id="id" v-model="selected" @change="$emit('update:modelValue', selected)">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </FormField>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import FormField from './FormField.vue';

export default defineComponent({
  name: 'FormSelect',
  components: { FormField },
  props: {
    label: { type: String, default: '' },
    id: { type: String, required: false },
    modelValue: { type: [String, Number], default: '' },
    options: {
      type: Array as () => Array<{ value: string | number; text: string }>,
      default: () => [],
    },
    error: { type: String, default: '' },
  },
  setup(props) {
    const selected = ref(props.modelValue);
    watch(() => props.modelValue, (newVal) => {
      selected.value = newVal;
    });
    return { selected };
  },
});
</script>

<style scoped>
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
</style>
