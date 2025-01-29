import express, { Request, Response } from 'express';
import axios from 'axios';
import { Product } from '../types/Product';

const productRouter = express.Router();

const BASE_URL = process.env.API_PRODUCTS_URL || "https://dummyjson.com/products?limit=16";

const getProducts = async (): Promise<Product []> => {
    try {
        const response = await axios.get<Product[]>(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Request Error', error);
        throw error; 
    }
};


productRouter.get('/', async (req: Request, res: Response) => {
    const data = await getProducts();

    // DEBUG
    // console.log(data);

    res.json(data);
});

export default productRouter;
