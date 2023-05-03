"use strict";

function getSupplier(code) {
 
  let name = "ACME: 123-L";
  let supplierCode = name.substring(0, 4); //ACME
  console.log( supplierCode + ":" + productNumberSize);
}
 function getProductNumber(code) {
    let name2 = "DI:12345-M";
    let supplierCode2 = name2.substring(2,8); //12345
 }

 function getSize(code){
    let name3 = "ACE:1-12";
    let supplierCode3 = name3.substring(0, 3); //ACE

 }
console.log()



getSupplier(code)
// that returns all characters before the :
getProductNumber(code)
// that returns all characters between the : and -
getSize(code)
// that returns all characters after the 