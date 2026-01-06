
const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('view engine','ejs')

app.use(morgan('dev'))

// inbuild middle ware
// in post method node js can't read the data so convert te data into json formet
app.use(express.json())
app.use(express.urlencoded({extends:true}))

app.get('/',(req,res)=>{
    res.render('index');
})

// to get the data from frontend to server we use "post" &
// to get the data from server to frontend we use get
app.post('/get-form-data' , (req , res)=>{
    console.log(req.body) // data always get by req.body
    res.send('Form Submitted');
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server started on : http://localhost:${port}`);
})