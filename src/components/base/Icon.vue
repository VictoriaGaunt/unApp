<template>
  <i :class="['icon', iconClass]" :style="styleObject"></i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '1em',
    },
    color: {
      type: String,
      default: 'inherit',
    },
  },
  setup(props) {
    const iconClass = computed(() => `icon-${props.name}`);
    const styleObject = computed(() => ({
      fontSize: props.size,
      color: props.color,
    }));
    return { iconClass, styleObject };
  },
});
</script>

<style module lang="scss">
.icon {
  display: inline-block;
}
</style>
