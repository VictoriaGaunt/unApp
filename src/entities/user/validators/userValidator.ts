import { IUser } from '../models/User.types';

/**
 * Валидирует данные пользователя.
 * Возвращает true, если данные корректны, иначе false.
 */
export function validateUser(user: IUser): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.username || !user.email) return false;
    if (!emailRegex.test(user.email)) return false;
    return true;
}