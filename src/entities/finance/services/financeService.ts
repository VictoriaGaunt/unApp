import { IBalance } from '../models/Finance.types';

/**
 * Сервис для работы с финансовыми операциями.
 */
export class FinanceService {
    private balances: IBalance[] = [];

    getBalance(userId: number): IBalance | null {
        return this.balances.find(b => b.userId === userId) || null;
    }

    updateBalance(userId: number, amount: number): IBalance {
        let balance = this.getBalance(userId);
        if (balance) {
            balance.amount = amount;
        } else {
            balance = { userId, amount, currency: 'USD' };
            this.balances.push(balance);
        }
        return balance;
    }
}
