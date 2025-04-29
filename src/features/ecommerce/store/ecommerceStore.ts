import { defineStore } from 'pinia';
import { Product } from '../types/productTypes';

export const useEcommerceStore = defineStore('ecommerce', {
    state: () => ({
        products: [] as Product[],
    }),
    actions: {
        setProducts(products: Product[]) {
            this.products = products;
        },
    },
});
