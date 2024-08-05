function fnReturn()
{
    return function f1(){
        console.log(200);
    }
}
var value=fnReturn();
console.log(value);
value();
//f1();