import { IBalance } from '../models/Finance.types';

/**
 * Валидирует баланс.
 */
export function validateBalance(balance: IBalance): boolean {
    if (balance.amount < 0) return false;
    return true;
}
