import { mount } from '@vue/test-utils';
import { FormInput } from '@/components/form';

describe('FormInput.vue', () => {
    it('renders form field with label and input', () => {
        const wrapper = mount(FormInput, {
            props: { label: 'Email', modelValue: '' },
        });
        expect(wrapper.find('label').text()).toBe('Email');
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('updates modelValue on input change', async () => {
        const wrapper = mount(FormInput, {
            props: { label: 'Email', modelValue: '' },
        });
        const input = wrapper.find('input');
        await input.setValue('test@example.com');
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['test@example.com']);
    });
});