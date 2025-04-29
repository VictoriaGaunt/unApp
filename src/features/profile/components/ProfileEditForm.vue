<template>
  <div class="profile-edit-form">
    <h3>Edit Profile</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Name</label>
        <input v-model="name" required />
      </div>
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ProfileEditFormProps } from './profileTypes';

export default defineComponent({
  name: 'ProfileEditForm',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['updateProfile'],
  setup(props, { emit }) {
    const name = ref(props.user.name);
    const email = ref(props.user.email);
    const onSubmit = () => {
      emit('updateProfile', { name: name.value, email: email.value });
    };
    return { name, email, onSubmit };
  },
});
</script>

<style scoped>
.profile-edit-form {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
}
</style>
