// 3.) Better than average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        if(arr.length-1){
            var avg = sum/(arr.length)
        }
    }
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i]
        if(currentElement > avg){
            count++
        }
    }
    return count
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4