import { IOrder } from '../models/Order.types';

/**
 * Валидирует заказ.
 */
export function validateOrder(order: IOrder): boolean {
    if (!order.items || order.items.length === 0) return false;
    if (order.total <= 0) return false;
    return true;
}