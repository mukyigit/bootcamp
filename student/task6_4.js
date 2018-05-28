const fs = require('fs');

fs.readFile('students.txt', function(err, data) {  
    if (err) throw err;
    var student = JSON.parse(data);
    
     var allstudent = student.map(x => ({id:x.id,marks:x.marks}));
     console.log(allstudent); 
});


