import mongoose, { Mongoose } from 'mongoose';
//import { MongoMemoryServer } from 'mongodb-memory-server';

var connection: Mongoose;

const connectDB = async () => {
    if (connection) return;
    try {
        connection = await mongoose.connect(process.env.MONGO_CONN!);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

export {
    connectDB
}
