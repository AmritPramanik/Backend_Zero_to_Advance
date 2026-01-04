
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.send("About Page");
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on : http://localhost:${port}`);
});
