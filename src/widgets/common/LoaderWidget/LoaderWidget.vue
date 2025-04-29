<template>
  <div :class="[$style.loaderContainer, { [$style.active]: active }]">
    <div :class="$style.loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoaderWidgetProps } from './LoaderWidget.types';

export default defineComponent({
  name: 'LoaderWidget',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Loading...',
    },
  },
  setup(props: LoaderWidgetProps) {
    return {};
  },
});
</script>

<style module lang="scss">
.loaderContainer {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.active {
    display: flex;
  }
}
.loader {
  display: flex;
  gap: 10px;
  span {
    width: 10px;
    height: 10px;
    background-color: #0d6efd;
    border-radius: 50%;
    animation: bounce 1s infinite alternate;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes bounce {
  to {
    transform: translateY(-10px);
  }
}
</style>
