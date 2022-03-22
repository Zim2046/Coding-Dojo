// 4.) Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum = 0;
for (var index = 1; index <= 100; index++) {
   sum += index
}
console.log(sum)