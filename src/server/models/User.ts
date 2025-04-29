import { Schema, model, Document, Types } from 'mongoose';

/** Поддокумент для истории игр */
interface GameRecord {
    gameId: string;        // идентификатор игры
    playedAt: Date;        // когда играл
    score: number;         // очки
    won: boolean;          // выигрыш или нет
}

export interface IUser extends Document {
    email: string;              // e-mail пользователя
    passwordHash?: string;      // хеш пароля (после ввода кода)
    pendingCode?: string;       // одноразовый код для первого входа
    codeExpiresAt?: Date;       // срок действия кода
    name?: string;              // имя пользователя
    username?: string;          // логин (ник)
    birthday?: Date;            // дата рождения
    games: Types.DocumentArray<GameRecord>;
    createdAt: Date;
    updatedAt: Date;
}

const GameRecordSchema = new Schema<GameRecord>({
    gameId:   { type: String, required: true },
    playedAt: { type: Date,   required: true, default: () => new Date() },
    score:    { type: Number, required: true, default: 0 },
    won:      { type: Boolean,required: true, default: false },
});

const UserSchema = new Schema<IUser>({
    email:         { type: String, required: true, unique: true, lowercase: true },
    passwordHash:  { type: String },
    pendingCode:   { type: String },
    codeExpiresAt: { type: Date },
    name:          { type: String },
    username:      { type: String, unique: true, sparse: true },
    birthday:      { type: Date },
    games:         { type: [GameRecordSchema], default: [] },
}, {
    timestamps: true, // автоматически добавит createdAt, updatedAt
});

export const UserModel = model<IUser>('User', UserSchema);
