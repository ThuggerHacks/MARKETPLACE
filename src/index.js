import express from 'express';
import dotenv from 'dotenv';
import { connection } from './connection/connection';
import { router } from './router/router';
import cors from 'cors';
dotenv.config();
connection();

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api',router);


app.listen(process.env.PORT,() => {
    console.log("SERVER RUNNING ON PORT "+process.env.PORT);
})