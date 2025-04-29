export interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

export const notificationsModule = {
    state: () => ({
        notifications: [] as Notification[],
    }),
    actions: {
        addNotification(notification: Notification) {
            this.notifications.push(notification);
        },
        removeNotification(id: number) {
            this.notifications = this.notifications.filter((n: Notification) => n.id !== id);
        },
    },
};