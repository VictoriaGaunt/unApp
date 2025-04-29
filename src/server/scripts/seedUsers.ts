import mongoose from 'mongoose';
import dotenv from 'dotenv';
import faker from 'faker';
import { UserModel } from '../src/server/models/User';

dotenv.config();

async function seed() {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');

    // Удалить старых пользователей (опционально)
    await UserModel.deleteMany({});

    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push({
            email: faker.internet.email().toLowerCase(),
            // без пароля: генерируем код, но сразу не завершаем регистрацию
            pendingCode: faker.datatype.number({ min: 100000, max: 999999 }).toString(),
            codeExpiresAt: new Date(Date.now() + 15 * 60_000), // 15 минут валидности
        });
    }

    await UserModel.insertMany(users);
    console.log('Seeded users:', users.length);

    await mongoose.disconnect();
    console.log('Disconnected');
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
