<template>
  <div :class="$style.weatherWidget">
    <h3>Weather in {{ city }}</h3>
    <p v-if="weatherInfo">
      Temperature: {{ weatherInfo.temperature }} °C<br />
      Condition: {{ weatherInfo.condition }}
    </p>
    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { WeatherWidgetProps, WeatherInfo } from './WeatherWidget.types';

export default defineComponent({
  name: 'WeatherWidget',
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  setup(props: WeatherWidgetProps) {
    const weatherInfo = ref<WeatherInfo | null>(null);

    onMounted(async () => {
      // Здесь можно сделать запрос к API погоды
      // Для примера симулируем ответ
      await new Promise((resolve) => setTimeout(resolve, 1000));
      weatherInfo.value = {
        temperature: 25,
        condition: 'Sunny',
      };
    });

    return { weatherInfo };
  },
});
</script>

<style module lang="scss">
.weatherWidget {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
}
</style>
