import { Router } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/User';
import nodemailer from 'nodemailer';


const router = Router();

router.post('/confirm-register', async (req, res) => {
    const { email, code, password } = req.body as { email: string, code: string, password: string };
    const user = await UserModel.findOne({ email });
    if (!user || user.pendingCode !== code || (user.codeExpiresAt! < new Date())) {
        return res.status(400).json({ error: 'Invalid or expired code' });
    }

    // Хешируем пароль
    const hash = await bcrypt.hash(password, 10);

    // Обновляем запись
    user.passwordHash  = hash;
    user.pendingCode   = undefined;
    user.codeExpiresAt = undefined;
    await user.save();

    return res.json({ success: true, message: 'Registration complete' });
});

export default router;

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if(!user || !await bcrypt.compare(password, user.passwordHash)) {
        return res.status(401).json({ success: false });
    }
    // выдаём токен JWT или сессию
    res.json({ success: true, user: { id: user._id, email: user.email } });
});

// Настройка почтовика (пример с Gmail SMTP)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

router.post('/register-code', async (req, res) => {
    const { email } = req.body as { email: string };
    if (!email) return res.status(400).json({ error: 'Email is required' });

    // Генерируем код
    const code = (Math.floor(Math.random() * 900000) + 100000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60_000);

    // Создаем или обновляем запись пользователя
    const user = await UserModel.findOneAndUpdate(
        { email },
        { pendingCode: code, codeExpiresAt: expiresAt },
        { upsert: true, new: true }
    );

    // Отправляем письмо
    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Your login code',
        text: `Your login code is ${code}. It expires in 15 minutes.`,
    });

    return res.json({ success: true, message: 'Code sent to email' });
});