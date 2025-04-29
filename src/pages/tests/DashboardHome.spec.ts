// pages/tests/DashboardHome.spec.ts

import { mount } from '@vue/test-utils';
import { DashboardHome } from '../dashboard';

describe('DashboardHome.vue', () => {
    it('renders dashboard home content', () => {
        const wrapper = mount(DashboardHome);
        expect(wrapper.text()).toContain('Dashboard');
    });
});
