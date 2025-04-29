import { mount } from '@vue/test-utils';
import { LoginForm } from '../components';

describe('LoginForm.vue', () => {
    it('renders form and emits login event', async () => {
        const wrapper = mount(LoginForm, {
            global: {
                stubs: ['router-link'],
            },
        });
        await wrapper.find('input[type="email"]').setValue('test@example.com');
        await wrapper.find('input[type="password"]').setValue('123456');
        await wrapper.find('form').trigger('submit.prevent');
        expect(wrapper.emitted()).toHaveProperty('login');
    });
});
