import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from './routes/auth.routes.js'
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI)

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
    connectMongoDB()
});