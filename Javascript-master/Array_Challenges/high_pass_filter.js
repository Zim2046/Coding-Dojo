// 2.) High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var index = 0; index < arr.length; index++) {
        var currentElement = arr[index]
        if(currentElement > cutoff){
            filteredArr.push(currentElement)
        }
        
    }

    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]