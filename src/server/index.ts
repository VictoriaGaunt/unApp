import express from 'express';
import { connectDB } from './db';

async function bootstrap() {
    await connectDB();
    const app = express();
    app.use(express.json());
    // ваши маршруты, например:
    // app.post('/api/login', authRouter);
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

bootstrap();
