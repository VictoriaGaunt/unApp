<template>
  <div :class="$style.priceWidget">
    <h4>{{ label }}</h4>
    <p>{{ formattedPrice }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { PriceWidgetProps } from './PriceWidget.types';

export default defineComponent({
  name: 'PriceWidget',
  props: {
    price: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      default: 'Price',
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },
  setup(props: PriceWidgetProps) {
    const formattedPrice = computed(() => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: props.currency,
      }).format(props.price);
    });
    return { formattedPrice };
  },
});
</script>

<style module lang="scss">
.priceWidget {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  h4 {
    margin-bottom: 5px;
  }
}
</style>
