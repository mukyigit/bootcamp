const fs = require('fs');
var student; 
fs.readFile('students.txt', function(err, data) {  
    if (err) throw err;
    student = JSON.parse(data);
    var jsk = JSON.stringify(student,null,2);
    console.log(jsk);

fs.writeFile('output.json',jsk,(err) => { 
         if(err) throw err;
          console.log('Data Written to file');  
});
  
});
