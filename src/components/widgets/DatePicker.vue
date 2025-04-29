<template>
  <div :class="$style.datePicker">
    <input type="date" v-model="selectedDate" @change="updateDate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DatePicker',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const selectedDate = ref(props.modelValue);
    const updateDate = () => {
      emit('update:modelValue', selectedDate.value);
    };
    return { selectedDate, updateDate };
  },
});
</script>

<style module lang="scss">
.datePicker {
  input[type="date"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
