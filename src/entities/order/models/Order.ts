import { OrderItem } from './OrderItem';

/**
 * Класс заказа.
 */
export class Order {
    id: number;
    userId: number;
    total: number;
    createdAt: Date;
    items: OrderItem[];

    constructor(id: number, userId: number, total: number, items: OrderItem[]) {
        this.id = id;
        this.userId = userId;
        this.total = total;
        this.createdAt = new Date();
        this.items = items;
    }
}