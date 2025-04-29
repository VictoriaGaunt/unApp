import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI!;
if (!uri) {
    throw new Error('MONGODB_URI не задан в .env');
}

// Параметры подключения, рекомендованные MongoDB Atlas
const options = {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
};

export async function connectDB() {
    try {
        await mongoose.connect(uri, options);
        console.log('✅ Mongoose connected to MongoDB Atlas');
    } catch (err) {
        console.error('❌ Mongoose connection error:', err);
        process.exit(1);
    }
}
