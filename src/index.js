require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/', userRouter);
app.use('/', adminRouter);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running on ' + process.env.SERVER_PORT)});
