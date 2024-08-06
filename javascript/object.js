// 
var obj={}
console.log(obj);

var customer={
    cusName:"ganesh",
    cusId:101,
    mobileNo:999999,
    cusAddress:"bhimavaram"

}
console.log(customer);

var product={
    proName:"laptop",
    proBrand:"HP",
    proId:123,
    proRate:39000,
    proAddress:"laptop store"

}
console.log(product);

//access the data
var prod = product.proName;
var prob = product["proBrand"];
console.log(prod);
console.log(prob);

// insert data
product.id=101;
console.log(product);
//modify data
product.id=201;
console.log(product);
//delete the data

delete product.id;
console.log(product);