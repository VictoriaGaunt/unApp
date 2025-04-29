<template>
  <div class="profile-card">
    <img :src="profileImage" alt="Profile Picture" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProfileCardProps } from './profileTypes';

export default defineComponent({
  name: 'ProfileCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    profileImage(): string {
      return this.user.profileImage || '/default-profile.png';
    },
  },
});
</script>

<style scoped>
.profile-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}
</style>
