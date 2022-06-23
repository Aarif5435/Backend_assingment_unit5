var myarg = process.argv.slice(2);
const fs = require("fs");
// console.log(myarg)
const path = require("path");

// const dirpath = path.join(__dirname, "Node_calcy");

switch(myarg[0]){
    case "create":{
      ( async function createFile(){
        fs.promises.writeFile(myarg[1], "utf-8",(err)=>{
            if(err){
                console.log(err)
            }
        });

       
       })();
    }
    break;
    case "append":{
        var data = "";
       for(let i=1;i<myarg.length-1;i++){
          data += myarg[i]+" ";
       }
      fs.appendFile(myarg[myarg.length-1], data, (err)=>{
        if(err){
            console.log(err)
        }
      });

    }
    break;
    case "rename":{
        fs.rename(myarg[1],myarg[2],(err)=>{
            if(err) console.log(err)
        });
    }
    break;
    case "delete":{
        fs.unlink(myarg[1],(err)=>{
            if(err) console.log(err)
        });
    }
    break;
    case "list":{
        fs.readdir(path, (err,files)=>{
            if(err)console.log(err);

          console.log(files);
        })
    }
    break;
    default : {
        return;
    }
}
  