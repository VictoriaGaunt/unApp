import { IProduct } from '../models/Product.types';

/**
 * Репозиторий для доступа к данным о продуктах.
 */
export class ProductRepository {
    async fetchProductById(id: number): Promise<IProduct | null> {
        // Симуляция API запроса
        return null;
    }

    async fetchAllProducts(): Promise<IProduct[]> {
        // Симуляция получения данных
        return [];
    }
}
