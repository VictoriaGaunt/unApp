<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price | currency }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductCardProps } from './productTypes';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  filters: {
    currency(value: number) {
      return '$' + value.toFixed(2);
    },
  },
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}
</style>
