<template>
  <div :class="$style.card">
    <img :src="news.image" alt="News Image" :class="$style.newsImage" />
    <div class="card-content">
      <h3>{{ news.title }}</h3>
      <p>{{ news.summary }}</p>
      <router-link :to="news.link">Read more</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface News {
  title: string;
  summary: string;
  image: string;
  link: string;
}

export default defineComponent({
  name: 'NewsCard',
  props: {
    news: {
      type: Object as PropType<News>,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
.newsImage {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.card-content {
  padding: 10px;
}
</style>
