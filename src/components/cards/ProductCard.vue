<template>
  <div :class="$style.card">
    <img :src="product.image" alt="Product Image" :class="$style.productImage" />
    <div class="card-content">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price | currency }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Product {
  name: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
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

<style module lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  padding: 15px;
  background: #fff;
}
.productImage {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.price {
  color: var(--success-color, #198754);
  font-weight: bold;
}
</style>
