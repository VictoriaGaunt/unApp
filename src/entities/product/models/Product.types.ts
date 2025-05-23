/**
 * Интерфейс продукта.
 */
export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    categoryId: number;
}