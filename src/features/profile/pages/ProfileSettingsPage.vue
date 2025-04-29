<template>
  <div class="profile-settings-page">
    <ProfileEditForm :user="user" @updateProfile="updateProfile" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ProfileEditForm } from '../components';

export default defineComponent({
  name: 'ProfileSettingsPage',
  components: { ProfileEditForm },
  setup() {
    const user = ref({ name: 'John Doe', email: 'john@example.com' });
    const updateProfile = (updatedData: { name: string; email: string }) => {
      console.log('Profile updated:', updatedData);
      // Обновление профиля через API
    };
    return { user, updateProfile };
  },
});
</script>

<style scoped>
.profile-settings-page {
  padding: 20px;
}
</style>
