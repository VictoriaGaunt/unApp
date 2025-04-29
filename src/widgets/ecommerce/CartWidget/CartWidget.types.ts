export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface CartWidgetProps {
    items: CartItem[];
}