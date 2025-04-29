<template>
  <div :class="$style.statsContainer">
    <div v-for="stat in stats" :key="stat.label" :class="$style.statItem">
      <h4>{{ stat.label }}</h4>
      <p>{{ stat.value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StatsWidgetProps } from './StatsWidget.types';

export default defineComponent({
  name: 'StatsWidget',
  props: {
    stats: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: StatsWidgetProps) {
    return {};
  },
});
</script>

<style module lang="scss">
.statsContainer {
  display: flex;
  gap: 20px;
}
.statItem {
  background: #f8f9fa;
  border-radius: 4px;
  padding: 10px 15px;
  h4 {
    margin-bottom: 5px;
  }
}
</style>
