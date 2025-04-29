<template>
  <nav :class="$style.navigation">
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
  name: 'Navigation',
});
</script>

<!-- SCSS-модуль для Navigation -->
<style module lang="scss">
.navigation {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;

    li {
      a {
        text-decoration: none;
        color: #32063f;
        font-weight: bold;

        &:hover {
          color: #0d6efd;
        }
      }
    }
  }
}
</style>
