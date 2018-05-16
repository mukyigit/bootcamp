// arrays declaration
var arr = [x,y];

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








function add(x,y){
  if (y === undefined){
          y = 0;
       return x+y;
   }
  if(typeof x == 'string' || typeof y == 'string'){
          x = Number(x);
          y = Number(y);   
         return x+y; 
    }if(typeof x == 'object' && typeof y=='object'){
              x = 0; 
              y = 0;
          return x+y;
 
    }//if(typeof x == 'function' ||  typeof y =='function');{
       //         x = 1;
         //       y=  1;
         // return x + y;          
    // }
    if(typeof x == 'float' && typeof y == 'float'){
                   
            return x + y;
     }
    if(typeof x  == 'function'){
              x = 1;
             return x+y ;
     }
    if(typeof y == 'function'){
              y = 1; 
            return x+y;
    } 
    if(typeof x == 'object'){
          x = 0;
          return x+y;
     }
     if(typeof y == 'object'){
          y = 0;
    }
  return x+y;
}


function sub(x,y){
    if(typeof x == 'string' || typeof y == 'string'){
          x = Number(x);
          y = Number(y);
          return x-y;
       }
       if(typeof x == 'object' &&  typeof y == 'object'){
              x = 0; 
              y = 0;
           return x-y;
       }
       if (y === undefined) {
          y = 0;
        return x+y;
       }
       if(typeof x == 'object'){
          x = 0;
       return x+y;
       }
       if(typeof y == 'object'){
          y = 0;
        return x+y
       }
       if(typeof x  == 'function'){
         x = 1;
         return x+y ;
       }
       if(typeof y == 'function'){
              y = 1;
      }
     return x+y;
}


function mul(x,y){
    if (y === undefined) {
          y = 0;
        return x*y;
     }
  if(typeof x == 'object' &&  typeof y == 'object'){
              x = 0;
              y = 0;
           return x*y;
     }
  if(typeof x == 'object'){
          x = 0;
        return x*y;
    }
   if(typeof y == 'object'){
           y = 0;
         return x*y;
    }
  if(typeof x  == 'function'){
         x = 1;
         return x*y ;
     }if(typeof y == 'function'){
              y = 1;
      }
     return x*y;
}


function div(x,y){
    if (y === undefined) {
          y = 0;
      return x/y;
    } 
    if(typeof x == 'object' &&  typeof y == 'object'){
          x = 0;
          y = 0;
          return x/y;
     }
    if(typeof x == 'object'){
          x = 0;
         return x/y;
    }
    if(typeof y == 'object'){
          y = 0;
        return x/y;
   }
  if(typeof x  == 'function'){
        x = 1;
       return x/y ;
   }if(typeof y == 'function'){
        y = 1;
    }
   return x/y;
}



function mod(x,y){
    if (y === undefined){
            y = 0; 
     }      
       return x%y;
 
 }
 


//Logical operator

function Andoperator(x,y){
    if (typeof x=='number' && typeof y=='number'){
        return true;
    }
    if(typeof x =='string' && typeof y =='string'){
          return true;
      }
     if(typeof x =='object' && typeof y =='object'){
          return true;
      }
      if(typeof x =='function' && typeof y =='function'){
          return true;
      }
      if(typeof x =='float' && typeof y =='float'){
          return true;
      }
      if(typeof x =='bollean' && typeof y =='bollean'){
          return true;
      }
    else{
        return false;
    }

}


function Oroperator(x,y){
    if(typeof x=='number' || typeof y=='number'){
        return true;
    }
    if(typeof x=='object' || typeof y=='object'){
        return true;
    }
   if(typeof x=='string' || typeof y=='string'){
        return true;
    }
   if(typeof x=='function' || typeof y=='function'){
        return true;
   }
   if(typeof x=='float' || typeof y=='float'){
        return true;
   } 
   if(typeof x=='bollean' || typeof y=='bollean'){
        return true;
    }
 
    else{
        return false;
    }

}

function Notoperator(x,y){
    if(!(typeof x=='number' || typeof y=='number')){
        return true;
    }
    if(!(typeof x=='object' || typeof y=='object')){
        return true;
    }
    if(!(typeof x=='string' || typeof y=='string')){
        return true;
    }
    if(!(typeof x=='functions' || typeof y=='functions')){
        return true;
    }
    if(!(typeof x=='float' || typeof y=='float')){
        return true;
    } 
     if(!(typeof x=='bollean' || typeof y=='bollean')){
        return true;
    }
    else{
        return false;
    }

}


//Strings
 function LengthString(x){
     if (typeof x == 'string'){
         return x.length;
    }
     if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return ;
    }
}


function LowercaseString(x){
    if (typeof x == 'string'){
        return x.toLowerCase();
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return ;
    }
}
function UppercaseString(x){
    if (typeof x == 'string'){
        return x.toUpperCase();
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return;
    }
}

function ConcatString(x,y){
    if ((typeof x=='string' && typeof y=='string')){
        return x.concat(y);
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return;
     }
 }  
   
function  RepeatString(x){ 
    if ((typeof x=='string')){
        return x.repeat(3);
    }
    if (typeof x=='object' || typeof x=='number' || typeof x=='function' ||typeof x=='boolean'){
        return;
     }
 }   

