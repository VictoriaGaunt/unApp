<template>
  <div class="dashboard-page">
    <h2>Dashboard</h2>
    <StatsWidget :stats="stats" />
    <RecentActivity :activities="activities" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { StatsWidget, RecentActivity } from '../components';

export default defineComponent({
  name: 'DashboardPage',
  components: { StatsWidget, RecentActivity },
  setup() {
    const stats = ref([
      { label: 'Sales', value: 1500 },
      { label: 'Users', value: 300 },
    ]);
    const activities = ref([
      { id: 1, text: 'User John logged in', date: '2023-07-20' },
      { id: 2, text: 'Order #1234 placed', date: '2023-07-19' },
    ]);

    onMounted(() => {
      // Здесь можно добавить логику запроса данных
    });

    return { stats, activities };
  },
});
</script>

<style scoped>
.dashboard-page {
  padding: 20px;
}
</style>
