const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
    await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };