const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

// const someData = "done beti";


const server = http.createServer((req, res) => {
   const filePath = 'index.html';


   if(req.url == "/Home"){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const modifiedContent = data.replace('<%= name %>', 'John Doe');
            res.end(modifiedContent);
        }
       
      });
   }

   else if(req.url === "/Submit"){
    let body = "";
    req.on("data",chunk=>{
      console.log(chunk.toString());
      body = chunk.toString();
    })
    //console.log(body);
    req.on("end",()=>{
      const formData = querystring.parse(body);
      console.log(formData);
       let Name = formData.name;
       let Email = formData.email;

       console.log(Name,Email);
      
    })


    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("submit");
}


});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  // console.log(`${someData}`);
});