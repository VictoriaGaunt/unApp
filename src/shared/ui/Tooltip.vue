<template>
  <!-- Компонент для всплывающих подсказок -->
  <div :class="$style.tooltipContainer" @mouseenter="show" @mouseleave="hide">
    <slot />
    <div v-if="visible" :class="$style.tooltip">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const visible = ref(false);
    const show = () => (visible.value = true);
    const hide = () => (visible.value = false);
    return { visible, show, hide };
  },
});
</script>

<style module lang="scss">
.tooltipContainer {
  position: relative;
  display: inline-block;
}
.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
  opacity: 0.9;
}
</style>
