const express = require('express');
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on : http://localhost:${port}`);
});