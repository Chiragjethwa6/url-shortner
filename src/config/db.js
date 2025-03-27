const mongoose = require('mongoose');

// Accessing environment variables
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;
const baseUrl = process.env.BASE_URL;

console.log("Connecting to MongoDB with URI: ", mongoURI);
console.log("Application running on port: ", port);
console.log("Base URL: ", baseUrl);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
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
