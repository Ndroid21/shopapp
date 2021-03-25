import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
