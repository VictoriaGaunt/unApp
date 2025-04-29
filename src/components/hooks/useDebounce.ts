import { ref, watch, Ref } from 'vue';

/**
 * Хук для дебаунса значения.
 * @param value Исходное значение (реактивная ссылка)
 * @param delay Задержка в мс
 * @returns Дебаунсированное значение
 */
export function useDebounce<T>(value: Ref<T>, delay = 300): Ref<T> {
    const debouncedValue = ref(value.value) as Ref<T>;
    let timeout: number;

    watch(value, (newVal) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            debouncedValue.value = newVal;
        }, delay);
    });

    return debouncedValue;
}