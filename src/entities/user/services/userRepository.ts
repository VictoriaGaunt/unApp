import { IUser } from '../models/User.types';

/**
 * Репозиторий для доступа к данным пользователей.
 * В реальном приложении здесь будут API вызовы или запросы к базе данных.
 */
export class UserRepository {
    async fetchUserById(id: number): Promise<IUser | null> {
        // Симуляция API запроса
        return null;
    }

    async fetchAllUsers(): Promise<IUser[]> {
        // Симуляция получения списка пользователей
        return [];
    }
}
