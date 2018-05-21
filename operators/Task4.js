//list of fucntions
var Processor = function(value) {
   this.value = vlaue;

};

Processor.prototype = {
   add: function(x,y)  {
      this.value = x + y;
}, 
   sub: function(x,y) {
       this.value = x - y;
},
   mul:function(x,y) { 
       this.value = x * y;
},
   div:function(x,y) { 
       this.value = x/y;
},
   mod:function(x,y) {
      this.value = x %y;
},
  Andopertor:function(x,y) {
  	   this.value = x & y;
},
  Ordopertor:function(x,y) {
  	   this.value = x | y;
},
  Notopertor:function(x) {
  	   this.value = ~x ;
},
  LengthString:function(x) {
  	this.value = x.length;
},
  UppercaseString:function(x) {
  	this.value = x.toUpperCase();
},
  ConcatString:function(x,y) {
  	this.value = x.concat(y);
},
  LowercaseString:function(x) {
  	this.value = x.LowerCase();
},
   
operator:function(op,array) {
	this.vlaue = add();
},
operator:function(op,array) {
	this.vlaue = add();
},
operator:function(op,array) {
	this.vlaue = sub();
},
operator:function(op,array) {
	this.vlaue = mul();
},

operator:function(op,array) {
	this.vlaue = div();
},
operator:function(op,array) {
	this.vlaue = mod();
},
operator:function(op,array) {
	this.vlaue = Andopertor();
},
operator:function(op,array) {
	this.vlaue = Ordopertor();
},
operator:function(op,array) {
	this.vlaue = Notopertor();
},
operator:function(op,array) {
	this.vlaue = x.length();
},
operator:function(op,array) {
	this.vlaue = x.toUpperCase();
},
operator:function(op,array) {
	this.vlaue =x.concat(y);
},
operator:function(op,array) {
	this.vlaue = x.LowerCase();
},

 };







