const fs = require('fs');

fs.readFile('students.txt', function(err, data) {  
    if (err) throw err;
    var student = JSON.parse(data);
   //get keys from the object
    var arr = Object.keys(student);  
    // sorrt keys array based on the marks
   
    arr.sort(function(a,b) {
      return student[b].marks - student[a].marks;
    });
       
    //iterate key array and assign rank value to object

   for( var i = 0, rank = 1; i< arr.length; i++) {
        student[arr[i]].rank = rank;
     //   increment rank
       if(student[arr[i+1]] && student[arr[i]].marks != student[arr[i+1]].marks)
       rank++;
     }
     
     var output = JSON.stringify(student,null,3);
    
   console.log(output);

});


