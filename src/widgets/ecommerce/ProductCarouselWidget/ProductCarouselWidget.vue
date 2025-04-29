<template>
  <div :class="$style.carousel">
    <button @click="prevSlide" :disabled="currentIndex === 0">&lt;</button>
    <div :class="$style.slide" v-for="(product, index) in products" :key="product.id" v-show="index === currentIndex">
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.name }}</p>
    </div>
    <button @click="nextSlide" :disabled="currentIndex === products.length - 1">&gt;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ProductCarouselWidgetProps } from './ProductCarouselWidget.types';

export default defineComponent({
  name: 'ProductCarouselWidget',
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: ProductCarouselWidgetProps) {
    const currentIndex = ref(0);

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    const nextSlide = () => {
      if (currentIndex.value < props.products.length - 1) {
        currentIndex.value++;
      }
    };

    return { currentIndex, prevSlide, nextSlide };
  },
});
</script>

<style module lang="scss">
.carousel {
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    cursor: pointer;
  }
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      height: auto;
    }
  }
}
</style>
