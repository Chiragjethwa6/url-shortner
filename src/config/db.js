const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.!MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
}

const disconnectDB = async () => {
    await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };