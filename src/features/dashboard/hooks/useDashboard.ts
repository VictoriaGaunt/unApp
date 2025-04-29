import { ref, onMounted } from 'vue';
import { fetchDashboardData } from '../services/dashboardService';
import { useDashboardStore } from '../store/dashboardStore';

export function useDashboard() {
    const dashboardStore = useDashboardStore();
    const loading = ref(false);

    onMounted(async () => {
        loading.value = true;
        const data = await fetchDashboardData();
        dashboardStore.setStats(data.stats);
        dashboardStore.setActivities(data.activities);
        loading.value = false;
    });

    return { dashboardStore, loading };
}
