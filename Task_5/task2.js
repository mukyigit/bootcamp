function randomString(length) {
      var text = "";
      var alpnum = "MukeH16021993";
   // var alpnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
      text += alpnum.charAt(Math.floor(Math.random() * alpnum.length));
      var arr = text.split(""); 
}    
      var arr1 = [];
      var arr2 = [];
      for(var i=0;i<arr.length/2;i++){

	arr1.push(arr[i]);
        //	console.log("from arr1-->  "+arr[i]);
	}
       
      for(var i=(arr.length/2)+1;i<arr.length;i++){
        
     // 	console.log("from arr2-->  "+arr[i]);
	arr2.push(arr[i]);
        }
      
      for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                  console.log(1);
              }   
             console.log(0);
       }      
       
}


randomString(100);
