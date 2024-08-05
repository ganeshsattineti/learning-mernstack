/*let output= (function(x)
{
    delete x;
    return x;

})
(3);
console.log(output);*/

/*var x=10;
function one()
{
    
    console.log(x);
    function two()
    {
        console.log(x);
    }
    two();
    var x=20;
}
one();
//output is undefined undefined*/

/*let x = 10;

if (true) {
  let y = 20;
  //let y=10; cannot redeclare y 
  console.log(x); // 10
  console.log(y); // 20
}*/

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
    console.log(a);
 }
 //console.log(a);
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

 //methods in js
 //using push method
 let cricket=["sachin","virat","dhoni","yuvaraj"];
 cricket.push("raina");
 console.log("push method is adding one or two element in end of the array",cricket);
//using pop method
 let NewCric=cricket.pop();
 console.log(cricket);
 console.log("pop method is delete the element end of the array ", NewCric);
 //using shift method
 var shi=cricket.shift();
 console.log(cricket);
 console.log("shift method is delete the element starting of the array "+shi);
 //using unshift ethod
 cricket.unshift("giakwad","rohit");
 console.log("unshift method is adding one or more elements starting of the array " ,cricket);
//using concat method
 var junCric=["surya","gill","jaiswal"];
 var middle=["axra","jadeja"]
 let newCric=cricket.concat(junCric,middle);
 console.log("concat method is used for combine two or more arrays",newCric);
//using join method
 let string=["ganesh","sattineti"];
 let fullName= string.join("/");
 console.log("join method is used for combine the strings in the same array",fullName);