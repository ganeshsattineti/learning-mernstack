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
var useName=user.includes("rohit");
console.log("includes method is used in checks the element in given array :",useName);

//using indexOf method
let cric=["raina","dhoni","sachin","kohli"];
var cricName=cric.indexOf("sachin");
console.log("indexOf method is used for return element position :",cricName );

//lenght of the array
var lengthOfArray=cric.length;
console.log("length of the array:",lengthOfArray);

//using slice method
var num=[10,20,30,40,50];
var returnNum=num.slice(0,3)//.reverse();
console.log(returnNum);

//using slice method
var names =["ganesh","mani","suresh","prasad"];
var myName=names.slice(0,4);
console.log(myName);

//using splice method
  var no=[101,103,104,105,106];
  no.splice(1,0,102);//adding element
  console.log(no);
 var delNo= no.splice(1,1);//deleting element
 console.log(delNo);
 console.log(no);
 no.splice(1,1,202);//replace the element 
 console.log(no);


//using forEach method
var users=["yash","siddharth","yukti","sameer","ziya"];
var user=users.forEach(function (item,index){
    console.log(index+1,item+" naidu");
    });
//accessing elements in th array
var use=[101,102,103,104,105];
console.log(use[2]);

//using map method:
var friend=["ganesh","prasad","nani","subbu"];
var bestFriend=friend.map((friends,index)=>{
  return {friends,index}; 
});
console.log(bestFriend);

//using filter method:
var number=[10,13,15,22,19,67,65,64];
var even= number.filter((item)=>{


 return item%2===0
 // console.log("this is arrow function");
});
console.log(even);
//example of filter method
var students=[
  {name:'ganesh', grade:70},
  {name:'prasad', grade:75},
  {name:'suresh', grade:75},
  {name:'mani', grade:80},
  {name:'nani', grade:90},
  {name:'subbu', grade:85}
];
var meritStudents=students.filter(function (student){
  return student.grade>70;
});
console.log(meritStudents);
 
//example of lastIndexOf method
var arr=[10,20,40,10,50,10,30,60];
var findindex=arr.lastIndexOf(10);
console.log(findindex);

  

 