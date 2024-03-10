const http = require("http");
const express = require("express")
const port = 8080;

//  http server creation 
// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     if (req.url=="/data") {
//         res.end("<h1>Data</h1>")
//     }else{
//         res.end("no url found");
//     }
  
// })

// express server creation;


const server = express()
server.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.end("<h1>hello world!</h1>")
})
server.get("/data",(req,res)=>{
    res.end("hello data!")
})

server.listen(port,()=>{
    console.log("server is running port 8080");
})