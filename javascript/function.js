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

//parameterised and argument function
function funpa(a,b)
{
   var x=a;
   var y=b;
  var result =x+y;
  console.log(result);
}
funpa(10,20);
funpa(30,40);
funpa(20,40);



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
  
  //callback function
 function funCall(x)
 {
   //console.log(x);
   x();
 }
 funCall(function ()
{
   console.log("this is call back function");
});

//higher order function

function funHof(a)
{
   a();

}
funHof(()=>{
   console.log("this hof function");
});



  