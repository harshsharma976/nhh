const express = require('express');
const app = express();
const fs = require('fs');
const port = 7000;
const path = require('path')
const sta = path.join(__dirname,"./public");

console.log(sta)

app.use(express.static (sta));
console.log(sta)


app.listen(port,()=>{
    // console.log('Server Created')
    
});
