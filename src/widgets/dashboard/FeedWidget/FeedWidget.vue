<template>
  <div :class="$style.feed">
    <div v-for="item in feedItems" :key="item.id" :class="$style.feedItem">
      <h5>{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <small>{{ item.date }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FeedWidgetProps } from './FeedWidget.types';

export default defineComponent({
  name: 'FeedWidget',
  props: {
    feedItems: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: FeedWidgetProps) {
    return {};
  },
});
</script>

<style module lang="scss">
.feed {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.feedItem {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
}
</style>
