import { IProduct } from '../models/Product.types';

/**
 * Сервис для бизнес-логики операций с продуктами.
 */
export class ProductService {
    private products: IProduct[] = [];

    createProduct(product: IProduct): IProduct {
        product.id = this.products.length + 1;
        this.products.push(product);
        return product;
    }

    updateProduct(id: number, updatedData: Partial<IProduct>): IProduct | null {
        const product = this.products.find(p => p.id === id);
        if (product) {
            Object.assign(product, updatedData);
            return product;
        }
        return null;
    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

    getProductById(id: number): IProduct | null {
        return this.products.find(p => p.id === id) || null;
    }
}
