<template>
  <div :class="$style.modalOverlay">
    <div :class="$style.modalContent">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="buttons">
        <button @click="$emit('confirm')">Yes</button>
        <button @click="$emit('cancel')">No</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConfirmModal',
  props: {
    title: {
      type: String,
      default: 'Confirm',
    },
    message: {
      type: String,
      default: 'Are you sure?',
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
  .buttons {
    margin-top: 15px;
    button {
      margin: 0 10px;
      padding: 8px 16px;
      cursor: pointer;
    }
  }
}
</style>
