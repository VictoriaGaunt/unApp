<template>
  <div :class="$style.modalOverlay">
    <div :class="$style.modalContent">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlertModal',
  props: {
    title: {
      type: String,
      default: 'Alert',
    },
    message: {
      type: String,
      default: 'Something went wrong.',
    },
  },
});
</script>

<style module lang="scss">
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalContent {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  button {
    margin-top: 15px;
    padding: 8px 16px;
    cursor: pointer;
  }
}
</style>
