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

 //arrays toppic
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

 //array function
 var numbers = [1, 2, 3, 4];
var hasEven = numbers.some((number) => number % 7 == 0); 
console.log(hasEven);

//'==' equality operator
// equality operator is compares two values equality after converting the both values as a common type.
console.log(5=='5'); //true
console.log(null==undefined); //true
console.log(0==false); //true
console.log(''==false); //true

//'===' strict equality operator
//strict equality opeartor is compares the two values without converting their data types.
console.log(5==='5');//false
console.log(null===undefined);//false
console.log(0===false); //false
console.log(''===false); //false
console.log(1===-1);//false

//sample
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
      
    }
    
  }
  return num > 1;
}

console.log(array.filter(isPrime));

//1 Find out whether a student has passed or failed in a subject based on his marks

function result(studentName,marks)
{
  if(marks>=28)
  {
    console.log('student name :'+studentName +' you are  passed');

  } else{
    console.log('student Name'+studentName +'sry you are failed.')
  }
}
result('ganesh',30);
//2 write a program to write eligibility of voting
function voting(age)
{
  if(age>18)
  {
    console.log('you are eligible to vote');
  }
  else 
  {
    console.log('you are not eligib;e to vote');

  }
}
voting(19);
voting(17);

//3 check given number is even or odd
function checkEvenOrOdd(number)
{
  if(number%2===0)
  {
    console.log(number +' is even number');
  }
  else{
    console.log(number +' is odd number');
  }
}
checkEvenOrOdd(20);
checkEvenOrOdd(21);

//4 check the cititzen is india or not

function citizen(country)
{
  if(country==='india')
  {
    console.log("the citizen is india");
  }
  else{
    console.log('the citizen is not india');
  }
}
citizen('india');
citizen('america');

//5 print the numbers from 1 to n based on the n value
function number(n)
{
  for(var i=1;i<=n;i++)
  {
    console.log('numbers is :',i);
  }
}
number(10);

//6 check given number is negative number/positive number
 function num(number)
 {
   if(number>0)
   {
    console.log(number," is positive number");
   }
   else{
    console.log(number," is negative number")
   }
 }
 num(10);
 num(-1);

 //7 write a program that reads 2 numbers A ans B checks, if B is greater than A by one
 function numb(a,b)
 {
  if(b===a+1)
    {
      console.log(b," is grater than ",a," by one number");
    }
    else
    {
      console.log(b," is greater than ",a, " by more than one");
    }
 }
 numb(2,3);

 //8 check if it is sunday or not
 function day(dayNumber)
 {
  if(dayNumber===7)
  {
    console.log(" 7th day is sunday");
  }
  else{
    console.log("not sunday");
  }
 }
 day(7);

 //example 2
 function week(day)
 {
  switch(day)
  {
    case 1:
      console.log("moday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
     case 4:
      console.log("thursday");
      break;
     case 5:
      console.log("friday");
      break;
      case 6:
        console.log("saturday");
        break;
      case 7:
        console.log("sunday");
        break;
      default:
        console.log("not matched the number");
        
        

  }
 }
 week(7);
 