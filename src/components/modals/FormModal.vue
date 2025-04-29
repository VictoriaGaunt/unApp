<template>
  <div :class="$style.modalOverlay">
    <div :class="$style.modalContent">
      <h3>{{ title }}</h3>
      <!-- Слот для формы -->
      <slot />
      <div class="buttons">
        <button @click="$emit('submit')">Submit</button>
        <button @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormModal',
  props: {
    title: {
      type: String,
      default: 'Form',
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
