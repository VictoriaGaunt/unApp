<template>
  <div class="stats-widget">
    <div v-for="stat in stats" :key="stat.label" class="stat">
      <h4>{{ stat.label }}</h4>
      <p>{{ stat.value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StatsWidgetProps } from './dashboardTypes';

export default defineComponent({
  name: 'StatsWidget',
  props: {
    stats: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.stats-widget {
  display: flex;
  gap: 20px;
}
.stat {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
}
</style>
