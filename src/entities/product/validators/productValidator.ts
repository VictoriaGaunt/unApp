import { IProduct } from '../models/Product.types';

/**
 * Валидирует данные продукта.
 */
export function validateProduct(product: IProduct): boolean {
    if (!product.name || product.price <= 0) return false;
    return true;
}