const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectDB} = require('./config/db');
const urlRoutes = require('./routes/url.routes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', urlRoutes);

module.exports = app;