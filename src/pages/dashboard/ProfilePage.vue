<!-- pages/dashboard/ProfilePage.vue -->
<template>
  <div class="profile-page">
    <h1>Your Profile</h1>
    <!-- Здесь можно импортировать ProfileCard из фичи profile -->
    <ProfileCard :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { ProfileCard } from '../../features/profile/components';

export default defineComponent({
  name: 'ProfilePage',
  components: { ProfileCard },
  setup() {
    const user = ref({ name: 'John Doe', email: 'john@example.com', profileImage: '' });
    onMounted(() => {
      // Получение профиля через API
    });
    return { user };
  },
});
</script>

<style scoped>
.profile-page {
  padding: 20px;
}
</style>
