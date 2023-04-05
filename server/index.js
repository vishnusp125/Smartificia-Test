import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/connection.js';
import passageRouter from "./routes/passage.js";
import morgan from 'morgan';


const app = express();
dotenv.config();
connectDB();

app.use(morgan('dev'));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: 'http://127.0.0.1:5173' }));

app.use('/passages', passageRouter);

app.use('/', (req, res) => {
    res.send("From backend")
})

const PORT = 5000

const server = app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
