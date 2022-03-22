// 5.) Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var i = 1;
var product = 1;

while(i < 13){
    product *= i;
    i++
    
}

console.log(product)