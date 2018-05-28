function readtextFile() {
    const fs = require('fs');
    fs.readFile('students.txt', function(err, data) {  
         if (err) {throw err;}
         var student = JSON.parse(data);
         console.log(student);
});

}
readtextFile();
console.log('This is after the read call');  
