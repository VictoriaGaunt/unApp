import { mount } from '@vue/test-utils';
import { StatsWidget } from '../components';

describe('StatsWidget.vue', () => {
    it('renders stats correctly', () => {
        const stats = [
            { label: 'Sales', value: 1000 },
            { label: 'Users', value: 250 },
        ];
        const wrapper = mount(StatsWidget, { props: { stats } });
        expect(wrapper.text()).toContain('Sales');
        expect(wrapper.text()).toContain('1000');
    });
});
