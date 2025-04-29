<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductCard } from './';
import { ProductListProps } from './productTypes';

export default defineComponent({
  name: 'ProductList',
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
