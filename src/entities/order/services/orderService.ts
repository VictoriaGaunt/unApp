import { IOrder } from '../models/Order.types';

/**
 * Сервис для обработки заказов.
 */
export class OrderService {
    private orders: IOrder[] = [];

    createOrder(order: IOrder): IOrder {
        order.id = this.orders.length + 1;
        order.createdAt = new Date();
        this.orders.push(order);
        return order;
    }

    updateOrder(id: number, updatedData: Partial<IOrder>): IOrder | null {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            Object.assign(order, updatedData);
            return order;
        }
        return null;
    }

    deleteOrder(id: number): boolean {
        const index = this.orders.findIndex(o => o.id === id);
        if (index !== -1) {
            this.orders.splice(index, 1);
            return true;
        }
        return false;
    }

    getOrderById(id: number): IOrder | null {
        return this.orders.find(o => o.id === id) || null;
    }
}
