
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


//stringify JSON object 
//var data = JSON.stringify(student);
//console.log(data);
//fs.writeFile('student-2.json',data);

//fs.writeFile('output.text',jsk,function(err){
  //   if(err) {
    //     console.log("An error occured while writing JSON Object");
      //    return console.log(err);
     // }
    // console.log("JSON file has been saved.");
// });
