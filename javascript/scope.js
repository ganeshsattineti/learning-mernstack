//scope statement
//global scope
var x=10;
function f1()
{
   console.log(x);
}
f1();
//function scope
function f2()
{
   var a = 30;
   //console.log(a);
}
console.log(a);
f2();

//block scope
function f3()
{
  if(10<20){
   var y =10;
   const x =10;
   //console.log(x);
  }
  console.log(x);
}
f3();