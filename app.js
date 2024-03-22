import express from 'express'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler.js';


dotenv.config()

async function bootstrap() {
    const app = express();

    connectDB()

    app.get('/', (req, res) => {
        res.send('Welcome to the Society Management System!');
    });

    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

bootstrap()