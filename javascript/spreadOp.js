//spread operator
var obj1={
    name:"ganesh",
    id:101,
    city:"bhiavaram"
}

//using spread operator copying the properties obj1 to obj2

var obj2={
    ...obj1,
    email:"ganeshs@gmail.com"
}
console.log("this is obj1 values");
console.log(obj1);
console.log("-----------------------");
console.log("this is obj2 value");
console.log(obj2);
