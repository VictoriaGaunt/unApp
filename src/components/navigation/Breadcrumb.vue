<template>
  <nav :class="$style.breadcrumb">
    <ol>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <router-link v-if="crumb.link" :to="crumb.link">{{ crumb.text }}</router-link>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Crumb {
  text: string;
  link?: string;
}

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    crumbs: {
      type: Array as PropType<Crumb[]>,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.breadcrumb {
  padding: 10px 20px;
  background-color: #f8f9fa;
  ol {
    list-style: none;
    display: flex;
    gap: 5px;
    padding: 0;
    margin: 0;
    li {
      &:not(:last-child)::after {
        content: '/';
        margin-left: 5px;
      }
    }
  }
}
</style>
