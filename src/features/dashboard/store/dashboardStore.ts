import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        stats: [] as Array<{ label: string; value: number }>,
        activities: [] as Array<{ id: number; text: string; date: string }>,
    }),
    actions: {
        setStats(stats: Array<{ label: string; value: number }>) {
            this.stats = stats;
        },
        setActivities(activities: Array<{ id: number; text: string; date: string }>) {
            this.activities = activities;
        },
    },
});
