import { onMounted, onBeforeUnmount, ref } from 'vue';

/**
 * Хук для отслеживания клика вне элемента.
 * @returns { element, clickedOutside } – референс на элемент и флаг клика вне
 */
export function useOutsideClick() {
    const element = ref<HTMLElement | null>(null);
    const clickedOutside = ref(false);

    const handleClick = (event: MouseEvent) => {
        if (element.value && !element.value.contains(event.target as Node)) {
            clickedOutside.value = true;
        } else {
            clickedOutside.value = false;
        }
    };

    onMounted(() => {
        document.addEventListener('click', handleClick);
    });
    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClick);
    });

    return { element, clickedOutside };
}
