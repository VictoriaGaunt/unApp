<template>
  <div class="product-detail-page">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="Product Image" />
    <p>Price: {{ product.price | currency }}</p>
    <p>Description: {{ product.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { ProductDetailProps } from '../types/productTypes';

export default defineComponent({
  name: 'ProductDetailPage',
  setup() {
    const product = ref({
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: '/img/product1.png',
      description: 'This is a great product.',
    });
    onMounted(() => {
      // Запрос подробной информации о продукте
    });
    return { product };
  },
});
</script>

<style scoped>
.product-detail-page {
  padding: 20px;
  text-align: center;
}
</style>
