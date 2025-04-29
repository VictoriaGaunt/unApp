export interface FeedItem {
    id: number;
    title: string;
    description: string;
    date: string;
}

export interface FeedWidgetProps {
    feedItems: FeedItem[];
}