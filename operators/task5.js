function random()
{ 
   var length = 100;
   var text = "";
var alpnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for(var i = 0; i < length; i++) {
        text += alpnum.charAt(Math.floor(Math.random() * alpnum.length));
    }
   return text;
   
}

var a = random();
var b = random();
console.log("a is "+a);
console.log("b is "+ b);
function compare(){
         var c=[]; 
          for(i = 0; i < 100; i++){
          if( a[i] === b[i]){
            c[i] = "1";
           }
           else {
          c[i] = "0"; }
       }
        console.log("c is   "+c);
        var fs = require('fs');
        fs.writeFile('temp.txt', c, function(err){
                if (err) throw err;
				  console.log("Successfully Written to File.");
    });

}
compare();



