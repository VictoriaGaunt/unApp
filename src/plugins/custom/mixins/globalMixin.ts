import { onMounted } from 'vue';

export default {
    mounted() {
        console.log('Global mixin mounted in component:', this.$options.name);
    },
};