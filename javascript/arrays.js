//arrays in js:
//using push method
let cricket=["sachin","virat","dhoni","yuvaraj"];
cricket.push("raina");
console.log("push method is adding one or two element in end of the array :",cricket);

//using pop method
let NewCric=cricket.pop();
console.log(cricket);
console.log("pop method is delete the element end of the array : ", NewCric);

//using shift method
var shi=cricket.shift();
console.log(cricket);
console.log("shift method is delete the element starting of the array : "+shi);

//using unshift ethod
cricket.unshift("giakwad","rohit");
console.log("unshift method is adding one or more elements starting of the array : " ,cricket);

//using concat method
var junCric=["surya","gill","jaiswal"];
var middle=["axra","jadeja"]
let newCric=cricket.concat(junCric,middle);
console.log("concat method is used for combine two or more arrays :",newCric);

//using join method
let string=["ganesh","sattineti"];
let fullName= string.join("/");
console.log("join method is used for combine the strings in the same array :",fullName);

//using includes method
var user=["raina","dhoni","kohli"];
console.log(user);
var name=user.includes("rohit");
console.log("includes method is used in checks the element in given array :",name);

//using indexOf method
let cric=["raina","dhoni","sachin","kohli"];
var cricName=cric.indexOf("sachin");
console.log("indexOf method is used for return element position :",cricName );

//lenght of the array
var lengthOfArray=cric.length;
console.log("length of the array:",lengthOfArray);