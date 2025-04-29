import { ref, onMounted } from 'vue';
import { useProfileStore } from '../store/profileStore';
import { getProfile } from '../services/profileService';

export function useProfile() {
    const profileStore = useProfileStore();
    const loading = ref(false);

    onMounted(async () => {
        loading.value = true;
        const profile = await getProfile();
        profileStore.setProfile(profile);
        loading.value = false;
    });

    return { profile: profileStore.profile, loading };
}
