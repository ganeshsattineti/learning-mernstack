// spread operator
    var obj1={
              name:"ganesh",
              id:101,
              city:"bhiavaram"
             }

// using spread operator copying the properties obj1 to obj2

   var obj2={
          ...obj1,
          email:"ganeshs@gmail.com"
            }
   console.log("this is obj1 values");
   console.log(obj1);
   console.log("-----------------------");
   console.log("this is obj2 value");
   console.log(obj2);

   //using spread operator copying the object properties into array elements.
  var obj={
      name:"prasad",
      id:101,
      city:"bhimavaram"
      };

var arr=[...Object.keys(obj)];
console.log(arr);
var arr1=[...Object.entries(obj)];
console.log(arr1);

const obj3 = { a: 1, b: 2, c: 3 };
const valuesArray = [...Object.values(obj3)];
console.log(valuesArray); 

//using spread operator copying the arrays in to objects.

const arr3=[['name','ganesh'],['age','23'],['city','bhimavaram']];
const obje={...Object.fromEntries(arr3)};
console.log(obje);
