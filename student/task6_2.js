const fs = require('fs');
  
fs.readFile('students.txt', function(err, data) {
    if (err) throw err;
     var student = JSON.parse(data);
       const totalmarks = student.reduce((totalmarks, currentstudent) =>
       totalmarks + currentstudent.marks, // reducer function 
       0   // initial accumulator value
    ); 
      
      console.log("sum of marks: " + totalmarks); 
      console.log("average of marks: " + totalmarks/student.length);
 });

console.log('This is after the read call');
