import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


const connection = () => {
    mongoose.connect(process.env.DBURL).then((data) => {
        console.log("DATABASE WORKING!");
    }).catch(error => {
        console.log(error);
    })
}

export {connection}