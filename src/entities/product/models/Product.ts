/**
 * Класс продукта.
 */
export class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    categoryId: number;

    constructor(id: number, name: string, price: number, image: string, categoryId: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.categoryId = categoryId;
    }
}