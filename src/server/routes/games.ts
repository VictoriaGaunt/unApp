import { UserModel } from '../models/User';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Добавление записи об игре
router.post('/play', authMiddleware, async (req: any, res) => {
    const { gameId, score, won } = req.body;
    const userId = req.user.id;
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.games.push({ gameId, score, won, playedAt: new Date() });
    await user.save();
    res.json({ success: true });
});

// Получить историю игр
router.get('/history', authMiddleware, async (req: any, res) => {
    const user = await UserModel.findById(req.user.id, 'games');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ games: user.games });
});

export default router;