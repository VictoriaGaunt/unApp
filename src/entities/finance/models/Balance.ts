/**
 * Класс баланса пользователя.
 */
export class Balance {
    userId: number;
    amount: number;
    currency: string;

    constructor(userId: number, amount: number, currency: string = 'USD') {
        this.userId = userId;
        this.amount = amount;
        this.currency = currency;
    }
}