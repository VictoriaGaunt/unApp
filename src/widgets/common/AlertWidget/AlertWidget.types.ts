export interface AlertWidgetProps {
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}