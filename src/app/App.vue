<script setup lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer,
  },
});
</script>

<template>
  <div :class="$style.appContainer">
      <Header />
      <Navigation />
      <main :class="$style.mainContent">
        <router-view />
      </main>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
      <Footer />
  </div>
</template>

<style module lang="scss">
@import './App.module.scss';
</style>
