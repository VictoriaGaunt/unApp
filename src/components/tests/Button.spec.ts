import { mount } from '@vue/test-utils';
import { Button } from '@/components/base';

describe('Button.vue', () => {
    it('renders slot content', () => {
        const wrapper = mount(Button, {
            slots: { default: 'Click me' },
        });
        expect(wrapper.text()).toContain('Click me');
    });

    it('emits click event', async () => {
        const wrapper = mount(Button, {
            slots: { default: 'Click' },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });
});