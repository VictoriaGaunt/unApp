<template>
  <div :class="$style.chartContainer">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import { ChartWidgetProps } from './ChartWidget.types';

export default defineComponent({
  name: 'ChartWidget',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
    chartType: {
      type: String,
      default: 'bar', // bar, line, pie, etc.
    },
  },
  setup(props: ChartWidgetProps) {
    const chartRef = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (chartRef.value) {
        new Chart(chartRef.value, {
          type: props.chartType,
          data: props.chartData,
          options: props.chartOptions,
        });
      }
    });

    return { chartRef };
  },
});
</script>

<style module lang="scss">
.chartContainer {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
