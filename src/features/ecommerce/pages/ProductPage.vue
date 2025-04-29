<template>
  <div class="product-page">
    <ProductList :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { ProductList } from '../components';

export default defineComponent({
  name: 'ProductPage',
  components: { ProductList },
  setup() {
    const products = ref([]);
    onMounted(() => {
      // Получение списка продуктов через API
      products.value = [
        { id: 1, name: 'Product 1', price: 29.99, image: '/img/product1.png' },
        { id: 2, name: 'Product 2', price: 49.99, image: '/img/product2.png' },
      ];
    });
    return { products };
  },
});
</script>

<style scoped>
.product-page {
  padding: 20px;
}
</style>
