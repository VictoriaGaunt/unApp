import { mount } from '@vue/test-utils';
import { ProductCard } from '../components';

describe('ProductCard.vue', () => {
    it('renders product details', () => {
        const product = {
            id: 1,
            name: 'Test Product',
            price: 19.99,
            image: '/img/test-product.png',
        };
        const wrapper = mount(ProductCard, {
            props: { product },
        });
        expect(wrapper.text()).toContain('Test Product');
        expect(wrapper.text()).toContain('$19.99');
    });
});
