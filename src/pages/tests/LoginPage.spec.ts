// pages/tests/LoginPage.spec.ts

import { mount } from '@vue/test-utils';
import { LoginPage } from '../auth';

describe('LoginPage.vue', () => {
    it('renders login page', () => {
        const wrapper = mount(LoginPage);
        expect(wrapper.text()).toContain('Login');
    });
});
