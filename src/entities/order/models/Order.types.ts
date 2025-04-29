/**
 * Интерфейсы для заказов.
 */
export interface IOrder {
    id: number;
    userId: number;
    total: number;
    createdAt: Date;
    items: IOrderItem[];
}

export interface IOrderItem {
    productId: number;
    quantity: number;
    price: number;
}