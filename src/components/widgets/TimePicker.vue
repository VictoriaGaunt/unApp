<template>
  <div :class="$style.timePicker">
    <input type="time" v-model="selectedTime" @change="updateTime" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TimePicker',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const selectedTime = ref(props.modelValue);
    const updateTime = () => {
      emit('update:modelValue', selectedTime.value);
    };
    return { selectedTime, updateTime };
  },
});
</script>

<style module lang="scss">
.timePicker {
  input[type="time"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
