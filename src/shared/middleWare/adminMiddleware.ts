import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload { id: string; role: string; }

export function adminAuth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = auth.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        if (payload.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        (req as any).adminId = payload.id;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}