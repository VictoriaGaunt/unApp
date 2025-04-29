<template>
  <div class="recent-activity">
    <h3>Recent Activity</h3>
    <ul>
      <li v-for="activity in activities" :key="activity.id">
        {{ activity.text }} - {{ activity.date }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RecentActivityProps } from './dashboardTypes';

export default defineComponent({
  name: 'RecentActivity',
  props: {
    activities: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.recent-activity {
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
