import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

/**
 * Хук для отслеживания изменений маршрута.
 * Возвращает текущий маршрут и вызывает callback при изменении.
 */
export function useRouteChange(callback: (to: any, from: any) => void) {
    const route = useRoute();
    watch(
        () => route.fullPath,
        (newPath, oldPath) => {
            callback(route, { fullPath: oldPath });
        }
    );
    return { route };
}
