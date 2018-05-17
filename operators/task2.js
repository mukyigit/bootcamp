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

console.log(add)

// all possible case of number.
console.log(add(2,3))
console.log(add(3))
console.log(add(2,""))
console.log(add("",2))
console.log(add("3",4))
console.log(add(2,{}))
console.log(add({},3))
console.log(add(2,function(){}))
console.log(add(function(){},2))
console.log(add(true,false))
console.log(add(true,true))
console.log(add("5"))
console.log(add(""))
console.log(add(5,"3"))
console.log(add("3",5))
console.log(add("4","6"))
console.log(add("string",{}))
console.log(add({},"3"))
console.log(add("5",function(){}))
console.log(add("5",{}))
console.log(add("string","string"))
console.log(add({},{}))
console.log(add({}, function(){}))
console.log(add({},{}))
console.log(add("mukesh",4))
console.log(add("7.1",4.5))


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



console.log(sub(2,3))
console.log(sub(3))
console.log(sub(2,""))
console.log(sub("",2))
console.log(sub("3",4))
console.log(sub(2,{}))
console.log(sub({},3))
console.log(sub(2,function(){}))
console.log(sub(function(){},2))
console.log(sub(true,false))
console.log(sub(true,true))
console.log(sub("5"))
console.log(sub(""))
console.log(sub(5,"3"))
console.log(sub("3",5))
console.log(sub("4","6"))
console.log(sub("string",{}))
console.log(sub({},"3"))
console.log(sub("5",function(){}))
console.log(sub("5",{}))
console.log(sub("string","string"))
console.log(sub({},{})) 
console.log(sub(2.1,4.3))


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

console.log(mul(2,3))
console.log(mul(3))
console.log(mul(2,""))
console.log(mul("",2))
console.log(mul("3",4))
console.log(mul(2,{}))
console.log(mul({},3))
console.log(mul(2,function(){}))
console.log(mul(function(){},2))
console.log(mul(true,false))
console.log(mul(true,true))
console.log(mul("5"))
console.log(mul(""))
console.log(mul(5,"3"))
console.log(mul("3",5))
console.log(mul("4","6"))
console.log(mul("string",{}))
console.log(mul({},"3"))
console.log(mul("5",function(){}))
console.log(mul("5",{}))
console.log(mul("string","string"))
console.log(mul({},{}))
console.log(mul({},1.1))

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
console.log(div(3,2))
console.log(div("5",2))
console.log(div(2,"str"))
console.log(div(2,"3"))
console.log(div("1","2"))
console.log(div("",2))
console.log(div({},""))
console.log(div({},{}))
console.log(div(2))
console.log(div({},1.1))
console.log(div(4,{}))
console.log(div({},true))
console.log(div(4,function(){}))
console.log(div(function(){},-7))
console.log(div(true,true))
console.log(div(true,false))
console.log(div("dccds,","dcfdfs"))
console.log(div(2.1,4.3))
console.log(div(2,3))
console.log(div(3))
console.log(div(2,""))
console.log(div("",2))
console.log(div("3",4))
console.log(div(2,{}))
console.log(div({},3))
console.log(div(2,function(){}))
console.log(div(function(){},2))
console.log(div(true,false))
console.log(div(true,true))
console.log(div("5"))
console.log(div(""))
console.log(div(5,"3"))
console.log(div("3",5))
console.log(div("4","6"))
console.log(div("string",{}))
console.log(div({},"3"))
console.log(div("5",function(){}))
console.log(div("5",{}))
console.log(div("string","string"))


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

console.log(mod(1,2))
console.log(mod("1",2))
console.log(mod(2,"str"))
console.log(mod(2,"3"))
console.log(mod("1","2"))
console.log(mod("",2))
console.log(mod({},""))
console.log(mod({},{}))
console.log(mod(2))
console.log(mod({},1.1))
console.log(mod(4,{}))
console.log(mod({},true))
console.log(mod(4,function(){}))
console.log(mod(function(){},-7))
console.log(mod(true,true))
console.log(mod(true,false))
console.log(mod("dccds,","dcfdfs"));
console.log(mod(2.1,4.3))
console.log(mod(2,3))
console.log(mod(3))
console.log(mod(2,""))
console.log(mod("",2))
console.log(mod("3",4))
console.log(mod(2,{}))
console.log(mod({},3))
console.log(mod(2,function(){}))
console.log(mod(function(){},2))
console.log(mod(true,false))
console.log(mod(true,true))
console.log(mod("5"))
console.log(mod(""))
console.log(mod(5,"3"))
console.log(mod("3",5))
console.log(mod("4","6"))
console.log(mod("string",{}))
console.log(mod({},"3"))
console.log(mod("5",function(){}))
console.log(mod("5",{}))
console.log(mod("string","string"))



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

console.log(Oroperator(1,2))
console.log(Oroperator("1",2));
console.log(Oroperator(1,2))
console.log(Oroperator("1",2));
console.log(Oroperator("2","3"));
console.log(Oroperator("1",2))
console.log(Oroperator(2,"str"))
console.log(Oroperator(2,"3"))
console.log(Oroperator(-2,-3))
console.log(Oroperator(1))
console.log(Oroperator("1","2"))
console.log(Oroperator("",2))
console.log(Oroperator({},1))
console.log(Oroperator({},""))
console.log(Oroperator({},{}))
console.log(Oroperator({},1.1))
console.log(Oroperator({},true))
console.log(Oroperator(4,function(){}))
console.log(Oroperator(true,true))
console.log(Oroperator(true,false))
console.log(Oroperator("dccds,","dcfdfs"));
console.log(Oroperator(function(){},3))
console.log(Oroperator(2.1,4.3))



function Andoperator(x,y) {
    var z;
    var x = Binaryconveration(x)
    var y = Binaryconveration(y)
    z= x & y;
    return z;
}

console.log(Andoperator)

console.log(Andoperator(1,2))
console.log(Andoperator("1",2));
console.log(Andoperator(1,2))
console.log(Andoperator("1",2));
console.log(Andoperator("2","3"));
console.log(Andoperator("1",2))
console.log(Andoperator(2,"str"))
console.log(Andoperator(2,"3"))
console.log(Andoperator(1))
console.log(Andoperator("1","2"))
console.log(Andoperator("",2))
console.log(Andoperator({},1))
console.log(Andoperator({},""))
console.log(Andoperator({},{}))
console.log(Andoperator({},1.1))
console.log(Andoperator({},true))
console.log(Andoperator(4,function(){}))
console.log(Andoperator(true,true))
console.log(Andoperator(true,false))
console.log(Andoperator("dccds,","dcfdfs"));
console.log(Andoperator(function(){},3))
console.log(Andoperator(2.1,4.3))



function Notoperator(x) {
    var z;
    var x = Binaryconveration(x)
    z= ~(x);
    return z.toString(2);
}


console.log(Notoperator)


console.log(Notoperator(1))
console.log(Notoperator("1"));
console.log(Notoperator(2))
console.log(Notoperator("1"));
console.log(Notoperator("56"));
console.log(Notoperator("strg"));
console.log(Notoperator(2.1,4.3))


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


console.log(LengthString('dhjdshhds'))
console.log(LengthString("hfrjfjhrfjh"))
console.log(ConcatString(2));
console.log(LengthString({}));
console.log(LengthString("true"));
console.log(LengthString(true));
console.log(LowercaseString("BOOTCAMP"))
console.log(UppercaseString("mukesh"))
console.log(UppercaseString("2"));
console.log(ConcatString("seller","gyan"))
console.log(ConcatString("creativemindz","group"))
console.log(RepeatString("Creativemindz"))  
