<template>
  <div :class="$style.notification" v-if="visible">
    <slot />
    <button @click="close" :class="$style.closeButton">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Notification',
  setup() {
    const visible = ref(true);
    const close = () => {
      visible.value = false;
    };
    return { visible, close };
  },
});
</script>

<style module lang="scss">
.notification {
  background-color: #ffc107;
  padding: 15px;
  border-radius: 4px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
}
.closeButton {
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  margin-left: 10px;
}
</style>
