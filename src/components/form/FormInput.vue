<template>
  <FormField :label="label" :id="id" :error="error">
    <Input :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :id="id" />
  </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormField from './FormField.vue';
import { Input } from '@/components/base';

export default defineComponent({
  name: 'FormInput',
  components: { FormField, Input },
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
/* Дополнительные стили для FormInput можно добавить здесь */
</style>
