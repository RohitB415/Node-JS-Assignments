const fs = require("fs");
const http = require("http");
const content = `<h1>Hello World</h1>
                 <p>This is Rohit</p>`;

fs.writeFileSync("index.html",content);
const server = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.end(data);
    })
})      

server.listen(3000,()=>{console.log("server is started")});