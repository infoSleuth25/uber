const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/conn');
const userRoutes = require('./routes/user.route');
connectToDb();


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/users',userRoutes);

module.exports = app;