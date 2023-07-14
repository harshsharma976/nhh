const express = require("express")
const app = express();   
const fs =require('fs')
const filePath ='Task2.html';   

const port = 8000;

app.get("/",(req,res)=>{
    fs.readFile(filePath,"utf8",(err,data)=>{
        console.log(data);
        const modifiedContent = data.replace('harsh','byee')
        res.end(modifiedContent);
    });
});
app.get("/home", (req, res) => {
    res.end("harsh")
});
app.post("/about", (req, res) => {
    res.end("sharma")    
});

app.listen(port, () => {
    console.log("Server create ")
});