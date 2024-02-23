const fs = require("fs");
// fs.writeFile("message.txt","Hello",(err)=>
// {
//     if(err)
//     throw err;
// console.log("File saved");
// }
fs.readFile("./message.txt","utf8",(e,data)=>
{
    if(e)
    throw e;
console.log(data);
});
