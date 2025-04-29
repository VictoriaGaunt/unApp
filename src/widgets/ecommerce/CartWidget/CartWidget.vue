<template>
  <div :class="$style.cart">
    <h4>Your Cart</h4>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id" :class="$style.cartItem">
        <p>{{ item.title }}</p>
        <p>{{ item.quantity }} x {{ item.price }}</p>
      </div>
      <div :class="$style.total">
        <strong>Total:</strong> {{ totalPrice }}
      </div>
      <button @click="$emit('checkout')">Checkout</button>
    </div>
    <p v-else>No items in cart.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { CartWidgetProps } from './CartWidget.types';

export default defineComponent({
  name: 'CartWidget',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['checkout'],
  setup(props: CartWidgetProps) {
    const totalPrice = computed(() => {
      return props.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    });
    return { totalPrice };
  },
});
</script>

<style module lang="scss">
.cart {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  .cartItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    padding: 8px 12px;
    cursor: pointer;
  }
}
</style>
