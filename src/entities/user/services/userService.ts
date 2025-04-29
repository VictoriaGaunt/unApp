import { IUser } from '../models/User.types';
import { UserRole } from '../models/UserRole';

/**
 * Сервис для бизнес-логики работы с пользователями.
 */
export class UserService {
    private users: IUser[] = [];

    createUser(user: IUser): IUser {
        // Генерация простого id
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    updateUser(id: number, updatedData: Partial<IUser>): IUser | null {
        const user = this.users.find(u => u.id === id);
        if (user) {
            Object.assign(user, updatedData);
            return user;
        }
        return null;
    }

    deleteUser(id: number): boolean {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }

    getUserById(id: number): IUser | null {
        return this.users.find(u => u.id === id) || null;
    }

    // Пример проверки наличия определенной роли у пользователя
    userHasRole(id: number, role: UserRole): boolean {
        const user = this.getUserById(id);
        return user ? user.roles.includes(role) : false;
    }
}
