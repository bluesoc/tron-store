import express, { Request, Response } from 'express';
import productRouter from './routes/productRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/products', productRouter);

app.listen(PORT, () => {
    console.log(`Running Server http://localhost:${PORT}`)
});

