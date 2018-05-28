const fs = require('fs');
  
fs.readFile('students.txt', function(err, data) {
    if (err) throw err;
    var student = JSON.parse(data);
   
     var high = student.filter(x =>  x.marks > 30);
    console.log(high);

   // console.log(student);

});

