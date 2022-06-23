var myarg = process.argv.slice(2);
// console.log(arguments);
const crypto = require("crypto");

switch(myarg[0]){
    case "add" :{
        var sum = 0;
        for(let i=1;i<myarg.length;i++){
            sum += +myarg[i];
        }
        console.log(sum);
        return;
    };
    case "sub" : {
        var sub = myarg[1] - myarg[2];
        console.log(sub);
        return;
    };
    case "mult" :{
        var mult = myarg[1]*myarg[2];
        console.log(mult);
        return;
    };
    case "divide" :{
        var div = myarg[1]/myarg[2];
        console.log(div);
        return;
    };
    case "random":{
        var random = crypto.randomInt(1, 1000);
            console.log(random);
            return;
        
    }
    default : {
        return;
    }
}
  
