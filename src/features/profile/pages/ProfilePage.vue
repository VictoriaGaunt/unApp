<template>
  <div class="profile-page">
    <ProfileCard :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { ProfileCard } from '../components';

export default defineComponent({
  name: 'ProfilePage',
  components: { ProfileCard },
  setup() {
    // Симуляция получения данных пользователя
    const user = ref({ name: 'John Doe', email: 'john@example.com', profileImage: '' });
    onMounted(() => {
      // Запрос к API для получения профиля
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
