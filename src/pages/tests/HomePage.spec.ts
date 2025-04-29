// pages/tests/HomePage.spec.ts

import { mount } from '@vue/test-utils';
import { HomePage } from '../public';

describe('HomePage.vue', () => {
    it('renders the home page title', () => {
        const wrapper = mount(HomePage);
        expect(wrapper.text()).toContain('Welcome');
    });
});
