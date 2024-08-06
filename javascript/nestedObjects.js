var user={
    name:{
        firstName:"ganesh",
        lastName:"sattineti",
        address:{
            city:"uppuluru",
            state:"Ap"
        },
    },
    fn:function (){
        console.log("this is calling");
    }
};
var firstNameValue=user.name.firstName;
var cityName=user.name.address.city;
console.log(firstNameValue);
console.log(cityName);
user.fn();
console.log(user.name.address);
