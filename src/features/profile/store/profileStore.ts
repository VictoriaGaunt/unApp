import { defineStore } from 'pinia';
import { Profile } from '../types/profileTypes';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: null as Profile | null,
    }),
    getters: {
        isProfileLoaded: (state) => !!state.profile,
    },
    actions: {
        setProfile(profile: Profile) {
            this.profile = profile;
        },
        clearProfile() {
            this.profile = null;
        },
    },
});
