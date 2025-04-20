/**
 * Дополнительная настройка Pinia.
 */
import { createPinia } from 'pinia';

const pinia = createPinia();
pinia.use(({ store }) => {
    store.$subscribe((mutation, state) => {
        console.log(`[Pinia] Mutation in store ${store.$id}:`, mutation);
    });
});

export default pinia;
