<template>
  <div :class="[$style.alert, alertTypeClass]" v-if="visible">
    <strong>{{ title }}</strong>
    <p>{{ message }}</p>
    <button @click="closeAlert">Close</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { AlertWidgetProps } from './AlertWidget.types';

export default defineComponent({
  name: 'AlertWidget',
  props: {
    title: {
      type: String,
      default: 'Alert',
    },
    message: {
      type: String,
      default: 'Something happened!',
    },
    type: {
      type: String,
      default: 'info', // info | success | warning | error
    },
  },
  setup(props: AlertWidgetProps) {
    const visible = ref(true);

    const alertTypeClass = computed(() => {
      switch (props.type) {
        case 'success':
          return $style.success;
        case 'warning':
          return $style.warning;
        case 'error':
          return $style.error;
        default:
          return $style.info;
      }
    });

    const closeAlert = () => {
      visible.value = false;
    };

    return { visible, alertTypeClass, closeAlert };
  },
});
</script>

<style module lang="scss">
.alert {
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #fff;
  &.info {
    background-color: #0d6efd;
  }
  &.success {
    background-color: #198754;
  }
  &.warning {
    background-color: #ffc107;
    color: #000;
  }
  &.error {
    background-color: #dc3545;
  }
  button {
    margin-top: 5px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
