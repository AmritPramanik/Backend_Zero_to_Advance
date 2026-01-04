
//  create a bsic http server

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == '/'){
        res.end("Home Page")
    }
    if(req.url == '/about'){
        res.end("It is About Page")
    }
    if(req.url == '/profile'){
        res.end("It is Profile Page")
    }
})
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});