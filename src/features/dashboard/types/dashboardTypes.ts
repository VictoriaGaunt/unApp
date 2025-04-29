export interface Stat {
    label: string;
    value: number;
}

export interface Activity {
    id: number;
    text: string;
    date: string;
}

export interface DashboardData {
    stats: Stat[];
    activities: Activity[];
}
