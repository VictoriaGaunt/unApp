<template>
  <nav :class="$style.navBar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<style module lang="scss">
.navBar {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 10px 20px;
    margin: 0;
    li {
      a {
        text-decoration: none;
        color: #32063f;
        font-weight: bold;
        &:hover {
          color: var(--primary-color, #0d6efd);
        }
      }
    }
  }
}
</style>
