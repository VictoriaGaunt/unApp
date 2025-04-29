export interface StatItem {
    label: string;
    value: number | string;
}

export interface StatsWidgetProps {
    stats: StatItem[];
}