<template>
  <FormField :label="label" :id="id" :error="error">
    <textarea :id="id" v-model="textValue" @input="$emit('update:modelValue', textValue)" />
  </FormField>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import FormField from './FormField.vue';

export default defineComponent({
  name: 'FormTextarea',
  components: { FormField },
  props: {
    label: { type: String, default: '' },
    id: { type: String, required: false },
    modelValue: { type: String, default: '' },
    error: { type: String, default: '' },
  },
  setup(props) {
    const textValue = ref(props.modelValue);
    watch(() => props.modelValue, (newVal) => {
      textValue.value = newVal;
    });
    return { textValue };
  },
});
</script>

<style scoped>
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>
