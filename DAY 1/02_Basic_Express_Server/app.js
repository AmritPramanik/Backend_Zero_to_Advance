//  create a basic express server

const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    console.log(req.url)
    res.send("It is Home Page")
})
app.get('/about',(req,res)=>{
    console.log(req.url)
    res.send("It is About Page")
})
app.get('/profile',(req,res)=>{
    console.log(req.url)
    res.send("It is Profile Page")
})

port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
