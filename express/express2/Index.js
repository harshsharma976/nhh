
// const express = require('express');
// const app = express();
// const fs = require('fs');
// const port = 8000;
// const path = require('path')
// // const sta = path.join(__dirname,"./public");

// app.set('views',path.join(__dirname,'./view'))

// // app.use(express.static (sta));
// // console.log(sta)
// app.set('view engine','hbs')


// app.get('/',(req,res)=>{
//     res.render("Profile",{
//         harsh:"sharma",
//     })
  
// });
// app.listen(port,()=>{
//     console.log('Server Created')
    
// });


const express = require('express');
const app = express();
const fs = require('fs');
const bodyparse = require('body-parser');
const port = 8000;

app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.get('/',(req,res)=>{
    fs.readFile("form.html","utf-8",(err,data)=>{
        res.end(data);
    })
})
app.post('/Submit',async(req,res)=>{
    const string =await req.body;
    console.log(string);
    res.end("Successfully");
})

app.listen(port,()=>{
    console.log(`your port is listening on ${port}`);
})