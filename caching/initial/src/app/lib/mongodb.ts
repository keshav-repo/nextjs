import mongoose, { Mongoose } from 'mongoose';

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
