import { Router } from 'express';
import { UserModel } from '../models/User';
import { authMiddleware } from '../middleware/auth'; // проверяет JWT/session

const router = Router();

// Обновление базовой информации (имя, логин, дата рождения)
router.put('/profile', authMiddleware, async (req: any, res) => {
    const { name, username, birthday } = req.body;
    const userId = req.user.id;

    // Можно добавить валидацию полей
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.name     = name;
    user.username = username;
    user.birthday = birthday ? new Date(birthday) : undefined;
    await user.save();

    res.json({ success: true });
});

export default router;