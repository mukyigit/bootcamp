// arrays declaration
var Arr  = new Array();

// operations fn starts
function operation(operator,arr){
       if(operator == "add"){
           return  add(arr[0],arr[1]);
       }
       if(operator == "sub"){
           return  sub(arr[0],arr[1]);
       } 
       if(operator == "mul"){
           return mul(arr[0],arr[1]);
       }
       if(operator == "div"){
           return div(arr[0],arr[1]);
       }
       if(operator == "mod"){
           return  mod(arr[0],arr[1]);
       }
       if(operator == "Andoperator"){
           return Andoperator(arr[0],arr[1])
       }
       if(operator == "Notoperator"){
             return Notoperator(arr[0])
       }
       if(operator == "Oroperator"){
          return Oroperator(arr[0],arr[1])
       }
       if(operator == " Notoperator"){
          return  Notoperator(arr[0],arr[1])
      }
      if(operator == "LengthString"){
         return  LengthString(arr[0])
      }
      if(operator == "LowercaseString"){
         return  LowercaseString(arr[0])
      }
      if(operator == "UppercaseString"){
        return  UppercaseString(arr[0])
      }
      if(operator == "RepeatString"){
        return  RepeatString(arr[0])
      }
      if(operator == "ConcatString"){
        return ConcatString(arr[0],arr[1])
      }
     
}

function add(x,y) {
  if (y === undefined) {
          y = 0;
  }
  if(typeof x == 'string') {
          x = Number(x);
  }
  if(typeof y == 'string') {
          y = Number(y);
  
  }
  if(typeof x == 'object') {
          x = 0;
  }
  if(typeof y == 'object') {
          y = 0;

  } 
  if(typeof x  == 'function') {
              x = 0;
  }
  if(typeof y == 'function') {
             y = 0;  
  }
  return x + y;	
	  
}

console.log(operation)

console.log(operation("add",[2,3]))
console.log(operation("add",[3]))
console.log(operation("add",[2,""]))
console.log(operation("add",["",2]))
console.log(operation("add",["3",4]))

console.log(operation("add",[2,{}]))
console.log(operation("add",[{},3]))
console.log(operation("add",[2,function(){}]))
console.log(operation("add",[true,false]))
console.log(operation("add",[function(){},2]))

console.log(operation("add",[true,true]))
console.log(operation("add",["5"]))
console.log(operation("add",[""]))
console.log(operation("add",[5,"3"]))
console.log(operation("add",["3",5]))

console.log(operation("add",["4","6"]))
console.log(operation("add",["string",{}]))
console.log(operation("add",[{},"3"]))
console.log(operation("add",["5",function(){}]))
console.log(operation("add",["5",{}]))

console.log(operation("add",["string","string"]))
console.log(operation("add",[{},{}]))
console.log(operation("add",[{},function(){}]))
console.log(operation("add",["mukesh",4]))
console.log(operation("add",["7.1",4.5]))



console.log(sub)

function sub(x,y) {
  if (y === undefined) {
          y = 0;
  }
  if(typeof x == 'string') {
          x = Number(x);
  }
  if(typeof y == 'string') {
          y = Number(y);
  
  }
  if(typeof x == 'object') {
          x = 0;
  }
  if(typeof y == 'object') {
          y = 0;

  } 
  if(typeof x  == 'function') {
          x = 0;  
  }
  if(typeof y == 'function') {
             y = 0;
  }
  return x - y;

}



console.log(operation("sub",[2,3]))
console.log(operation("sub",[3]))
console.log(operation("sub",[2,""]))
console.log(operation("sub",["",2]))
console.log(operation("sub",["3",4]))

console.log(operation("sub",[2,{}]))
console.log(operation("sub",[{},3]))
console.log(operation("sub",[2,function(){}]))
console.log(operation("sub",[true,false]))
console.log(operation("sub",[function(){},2]))

console.log(operation("sub",[true,true]))
console.log(operation("sub",["5"]))
console.log(operation("sub",[""]))
console.log(operation("sub",[5,"3"]))
console.log(operation("sub",["3",5]))

console.log(operation("sub",["4","6"]))
console.log(operation("sub",["string",{}]))
console.log(operation("sub",[{},"3"]))
console.log(operation("sub",["5",function(){}]))
console.log(operation("sub",["5",{}]))

console.log(operation("sub",["string","string"]))
console.log(operation("sub",[{},{}]))
console.log(operation("sub",[{},function(){}]))
console.log(operation("sub",["mukesh",4]))
console.log(operation("sub",["7.1",4.5]))


console.log(mul)



function mul(x,y) {
  if (y === undefined) {
          y = 0;
  }
  if(typeof x == 'string') {
          x = Number(x);
  }
  if(typeof y == 'string') {
          y = Number(y);
 
  }
  if(typeof x == 'object') {
          x = 0;
  }
  if(typeof y == 'object') {
          y = 0;

  }
  if(typeof x  == 'function') {
          x = 0; 
  }
  if(typeof y == 'function') {
             y = 0;
  }
  return x * y;

}

console.log(operation("mul",[2,3]))
console.log(operation("mul",[3]))
console.log(operation("mul",[2,""]))
console.log(operation("mul",["",2]))
console.log(operation("mul",["3",4]))
console.log(operation("mul",[2,{}]))
console.log(operation("mul",[{},3]))
console.log(operation("mul",[2,function(){}]))
console.log(operation("mul",[function(){},2]))
console.log(operation("mul",[true,false]))
console.log(operation("mul",[true,true]))
console.log(operation("mul",["5"]))
console.log(operation("mul",[""]))
console.log(operation("mul",[5,"3"]))
console.log(operation("mul",["3",5]))
console.log(operation("mul",["4","6"]))
console.log(operation("mul",["string",{}]))
console.log(operation("mul",[{},"3"]))
console.log(operation("mul",["5",function(){}]))
console.log(operation("mul",["5",{}]))
console.log(operation("mul",["string","string"]))
console.log(operation("mul",[{},{}]))
console.log(operation("mul",[{},1.1]))

function div(x,y) {
  if (y === undefined) {
          y = 0;
  }
  if(typeof x == 'string') {
          x = Number(x);
  }
  if(typeof y == 'string') {
          y = Number(y);
 
  }
  if(typeof x == 'object') {
          x = 0;
  }
  if(typeof y == 'object') {
          y = 0;

  }
  if(typeof x  == 'function') {
          x = 0; 
  }
  if(typeof y == 'function') {
             y = 0;

  }
  return x / y;

}
console.log(div)
console.log(operation("div",[3,2]))
console.log(operation("div",["5",2]))
console.log(operation("div",[2,"str"]))
console.log(operation("div",[2,"3"]))
console.log(operation("div",["1","2"]))

console.log(operation("div",["",2]))
console.log(operation("div",[{},""]))
console.log(operation("div",[{},{}]))
console.log(operation("div",[2]))
console.log(operation("div",[{},1.1]))

console.log(operation("div",[4,{}]))
console.log(operation("div",[{},true]))
console.log(operation("div",[4,function(){}]))
console.log(operation("div",[function(){},-7]))
console.log(operation("div",[true,true]))

console.log(operation("div",[true,false]))
console.log(operation("div",["dccds,","dcfdfs"]))
console.log(operation("div",[2.1,4.3]))
console.log(operation("div",[2,3]))
console.log(operation("div",[3]))

console.log(operation("div",["",2]))
console.log(operation("div",["3",4]))
console.log(operation("div",[2,{}]))
console.log(operation("div",[{},3]))
console.log(operation("div",[2,function(){}]))

console.log(operation("div",[function(){},2]))
console.log(operation("div",[true,false]))
console.log(operation("div",[true,true]))
console.log(operation("div",["5"]))
console.log(operation("div",[""]))

console.log(operation("div",[5,"3"]))
console.log(operation("div",["3",5]))
console.log(operation("div",["4","6"]))
console.log(operation("div",["string",{}]))
console.log(operation("div",[{},"3"]))
console.log(operation("div",["5",function(){}]))
console.log(operation("div",["5",{}]))
console.log(operation("div",["string","string"]))



function mod(x,y) {
  if (y === undefined) {
          y = 0;
  }
  if(typeof x == 'string') {
          x = Number(x);
  }
  if(typeof y == 'string') {
          y = Number(y);

  }
  if(typeof x == 'object') {
          x = 0;
  }
  if(typeof y == 'object') {
          y = 0;

  }
  if(typeof x  == 'function') {
          x = 0;
  }
  if(typeof y == 'function') {
             y = 0;
  }
  return x % y;

}
console.log(mod)

console.log(operation("mod",[1,2]))
console.log(operation("mod",["1",2]))
console.log(operation("mod",[2,"str"]))
console.log(operation("mod",[2,"3"]))
console.log(operation("mod",["1","2"]))
console.log(operation("mod",["",2]))
console.log(operation("mod",[{},""]))
console.log(operation("mod",[{},{}]))
console.log(operation("mod",[2]))
console.log(operation("mod",[{},1.1]))
console.log(operation("mod",[4,{}]))
console.log(operation("mod",[{},true]))
console.log(operation("mod",[4,function(){}]))
console.log(operation("mod",[function(){},-7]))
console.log(operation("mod",[true,true]))
console.log(operation("mod",[true,false]))
console.log(operation("mod",["dccds,","dcfdfs"]))
console.log(operation("mod",[2.1,4.3]))
console.log(operation("mod",[2,3]))
console.log(operation("mod",[3]))
console.log(operation("mod",[2,""]))
console.log(operation("mod",["",2]))
console.log(operation("mod",["3",4]))
console.log(operation("mod",[2,{}]))
console.log(operation("mod",[{},3]))
console.log(operation("mod",[2,function(){}]))
console.log(operation("mod",[function(){},2]))
console.log(operation("mod",[true,false]))
console.log(operation("mod",[true,true]))
console.log(operation("mod",["5"]))
console.log(operation("mod",[""]))

console.log(operation("mod",[5,"3"]))
console.log(operation("mod",["3",5]))
console.log(operation("mod",["4","6"]))
console.log(operation("mod",["string",{}]))
console.log(operation("mod",[{},"3"]))
console.log(operation("mod",["5",function(){}]))
console.log(operation("mod",["5",{}]))
console.log(operation("mod",["string","string"]))





function Binaryconveration(x) {
    var value  = ((+x).toString(2))
    return value;
}

function Oroperator(x,y) {
    var z;
    var x = Binaryconveration(x)
    var y = Binaryconveration(y)
    z= x | y;
    return z;
}

console.log(Oroperator)

console.log (operation("Oroperator",[1,2]))
console.log (operation("Oroperator",["1",2]))
console.log (operation("Oroperator",[1,2]))
console.log (operation("Oroperator",["1",2]))
console.log (operation("Oroperator",["2","3"]))
console.log (operation("Oroperator",["1",2]))
console.log (operation("Oroperator",[2,"str"]))
console.log (operation("Oroperator",[2,"3"]))
console.log (operation("Oroperator",[-2,-3]))
console.log (operation("Oroperator",[1]))
console.log (operation("Oroperator",["1","2"]))
console.log (operation("Oroperator",["",2]))
console.log (operation("Oroperator",[{},1]))
console.log (operation("Oroperator",[{},""]))
console.log (operation("Oroperator",[{},{}]))
console.log (operation("Oroperator",[{},1.1]))
console.log (operation("Oroperator",[{},true]))
console.log (operation("Oroperator",[4,function(){}]))
console.log (operation("Oroperator",[true,true]))
console.log (operation("Oroperator",[true,false]))
console.log (operation("Oroperator",["dccds,","dcfdfs"]))
console.log (operation("Oroperator",[function(){},3]))
console.log (operation("Oroperator",[2.1,4.3]))


function Andoperator(x,y) {
    var z;
    var x = Binaryconveration(x)
    var y = Binaryconveration(y)
    z= x & y;
    return z;
}

console.log(Andoperator)

console.log (operation("Andoperator",[1,2]))
console.log (operation("Andoperator",["1",2]))
console.log (operation("Andoperator",[1,2]))
console.log (operation("Andoperator",["1",2]))
console.log (operation("Andoperator",["2","3"]))
console.log (operation("Andoperator",["1",2]))
console.log (operation("Andoperator",[2,"str"]))
console.log (operation("Andoperator",[2,"3"]))
console.log (operation("Andoperator",[-2,-3]))
console.log (operation("Andoperator",[1]))
console.log (operation("Andoperator",["1","2"]))
console.log (operation("Andoperator",["",2]))
console.log (operation("Andoperator",[{},1]))
console.log (operation("Andoperator",[{},""]))
console.log (operation("Andoperator",[{},{}]))
console.log (operation("Andoperator",[{},1.1]))
console.log (operation("Andoperator",[{},true]))
console.log (operation("Andoperator",[4,function(){}]))
console.log (operation("Andoperator",[true,true]))
console.log (operation("Andoperator",[true,false]))
console.log (operation("Andoperator",["dccds,","dcfdfs"]))
console.log (operation("Andoperator",[function(){},3]))
console.log (operation("Andoperator",[2.1,4.3]))


function Notoperator(x) {
    var z;
    var x = Binaryconveration(x)
    z= ~(x);
    return z.toString(2);
}


console.log(Notoperator)


console.log(operation("Notoperator",[1]))
console.log(operation("Notoperator",["1"]))
console.log(operation("Notoperator",[2]))
console.log(operation("Notoperator",["1"]))
console.log(operation("Notoperator",["56"]))
console.log(operation("Notoperator",["strg"]))
console.log(operation("Notoperator",[2.1,4.3]))





function LengthString(x) {
    if (typeof x == 'string') {
         return x.length;
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean') {
        return 0 ;
    }
}

function UppercaseString(x) {
    if (typeof x == 'string') {
        return x.toUpperCase();
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean') {
        return 0;
    }
}

function ConcatString(x,y) {
    if ((typeof x=='string' && typeof y=='string')) {
        return x.concat(y);
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean') {
        return 0;
     }
}  

function LowercaseString(x) {
    if (typeof x == 'string') {
        return x.toLowerCase();
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean') {
        return ;
    } 
}


function  RepeatString(x) { 
    if ((typeof x=='string')) {
        return x.repeat(3);
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return;
     }
 } 

console.log(String)


console.log(operation("LengthString",['dhjdshhds']))
console.log(operation("LengthString",["hfrjfjhrfjh"]))
console.log(operation("ConcatString",[2]))
console.log(operation("LengthString",[{}]))
console.log(operation("LengthString",["true"]))
console.log(operation("LengthString",[true]))
console.log(operation("LowercaseString",["BOOTCAMP"]))
console.log(operation("UppercaseString",["mukesh"]))
console.log(operation("UppercaseString",["2"]))
console.log(operation("ConcatString",["seller","gyan"]))
console.log(operation("ConcatString",["creativemindz","group"]))
console.log(operation("RepeatString",["Creativemindz"]))
