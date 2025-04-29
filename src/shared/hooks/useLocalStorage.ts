import { ref, watch } from 'vue';

export function useLocalStorage(key: string, initialValue: string) {
    const storedValue = localStorage.getItem(key) || initialValue;
    const value = ref(storedValue);

    watch(value, (newVal) => {
        localStorage.setItem(key, newVal);
    });

    return value;
}