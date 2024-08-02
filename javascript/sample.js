/*let output= (function(x)
{
    delete x;
    return x;

})
(3);
console.log(output);*/

//var x=10;
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
//output is undefined undefined

let x = 10;

if (true) {
  let y = 20;
  //let y=10; cannot redeclare y 
  console.log(x); // 10
  console.log(y); // 20
}
