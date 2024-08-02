//functions toppic :

//naming functions
function add()
 {
    var a=10;
    var b =20;
    result=a+b;
    console.log(result);

 }
add();

function mul()
 {
 let a=10;
 let b=20;
 result =a*b;
 console.log(result)
 }
mul();

function div()
 {
    var a=20;
    var b=10;
    result=a/b;
    console.log(result);
 }
div();

//anonymus function
var ret = function()
 {
return 100;
 }
var res= ret();
console.log(res);

//function expression
var funex = function()
 {
  var a = 30;
  var b = 10;
  res = a%b;
  console.log(res);
 }
 //console.log(funex);
funex();

//arrow function
var arrow =()=>
 {
 var name ="ganesh";
 console.log(name);
  }
  arrow();
  //higher order function
  