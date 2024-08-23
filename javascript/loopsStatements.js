//while loop:
let x=1;
while(x<=10)
{
  console.log("x value: ",x);
  x++;
}
console.log("this is while loop");

//d0-while:
var y=10;
do{
  console.log("the value is: ",y);
  y++;
}
while(y<=5);
console.log("this is do-while loop");

// for loop statements:
for(var i=0;i<=10;i++)
{
  console.log("i value is: ",i);
}
//for of loop
let array=[101,102,103,104];
for(var value of array)
{
  console.log(value);
}

//using for-in loop iterate the array.
let arr=[10,20,30,40,50];
for(var value in arr)
{
  console.log('arr:',arr[value]);
}
//for-in loop
let obj=
{
  name:'ganesh',
  id:101,
  city:'bhimavaram'
}
for(var key in obj)
{
  console.log(obj[key]);
  console.log(key,':',obj[key]);
}