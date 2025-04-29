import { mount } from '@vue/test-utils';
import { ProfileCard } from '../components';

describe('ProfileCard.vue', () => {
    it('renders user info', () => {
        const user = { name: 'Jane Doe', email: 'jane@example.com', profileImage: '' };
        const wrapper = mount(ProfileCard, {
            props: { user },
        });
        expect(wrapper.text()).toContain('Jane Doe');
        expect(wrapper.text()).toContain('jane@example.com');
    });
});
