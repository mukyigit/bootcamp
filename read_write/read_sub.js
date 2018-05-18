var fs = require('fs');

fs.readFile('temp.txt', function(err, buf) {
    
    var string = buf.toString();
    var data = string.split(",");
    var x = data[1];
    var y = data[2];
    sub =  Number(x) - Number(y);  
       console.log(sub);   
             
            
});
