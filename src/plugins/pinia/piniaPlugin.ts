import { createPinia } from 'pinia';

const pinia = createPinia();

// Пример: логирование мутаций в Pinia
pinia.use(({ store }) => {
    store.$subscribe((mutation, state) => {
        console.log(`[Pinia] Mutation in store ${store.$id}:`, mutation);
    });
});

export default pinia;