<template>
  <div :class="$style.card">
    <img :src="avatar" alt="User Avatar" :class="$style.avatar" />
    <div class="card-content">
      <h3>{{ user.username }}</h3>
      <p v-if="user.email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface User {
  username: string;
  email?: string;
  avatar?: string;
}

export default defineComponent({
  name: 'UserCard',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  computed: {
    avatar(): string {
      return this.user.avatar || '/default-avatar.png';
    },
  },
});
</script>

<style module lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  padding: 15px;
  background: #fff;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>
