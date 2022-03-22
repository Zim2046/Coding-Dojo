// 4.) arr Reverse


function reverse(arr) {
//your code here 
    var i = 0;
    for (var j = arr.length-1; j > 0; j--) {
        var fromLeft = arr[i];
        fromRight = arr[j]
        if(i >= j){
            // var temp = fromLeft
            break
        }
        else{
            var temp = fromRight
            arr[i] = temp
            arr[j] = fromLeft
            i++
        }
    }
    return arr;  
}

var result = reverse(["a", "b", "c", "d", "e"]);
// var result = reverse(["a", "b", "c", "d", "e", "f"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]