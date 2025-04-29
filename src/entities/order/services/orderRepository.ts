import { IOrder } from '../models/Order.types';

/**
 * Репозиторий для доступа к данным заказов.
 */
export class OrderRepository {
    async fetchOrderById(id: number): Promise<IOrder | null> {
        // Симуляция API запроса
        return null;
    }

    async fetchAllOrders(): Promise<IOrder[]> {
        // Симуляция получения списка заказов
        return [];
    }
}
