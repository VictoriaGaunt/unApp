import { ref, onMounted } from 'vue';
import { fetchProducts } from '../services/ecommerceService';

export function useProduct() {
    const products = ref([]);
    const loading = ref(false);

    onMounted(async () => {
        loading.value = true;
        products.value = await fetchProducts();
        loading.value = false;
    });

    return { products, loading };
}
