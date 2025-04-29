/**
 * Класс позиции в заказе.
 */
export class OrderItem {
    productId: number;
    quantity: number;
    price: number;

    constructor(productId: number, quantity: number, price: number) {
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}