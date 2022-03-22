for(var index = 1; index < 101; index++){
    if(index%3 == 0){
       if(index%5 == 0){
            printFizzBuzz();
       }
       else{
            printFizz();
       }
    }
    else if(index%5 == 0){
        if(index%3 == 0){
            printFizzBuzz();
        }
        else{
            printBuzz();
        }
    }
    else{
        console.log(index);
    }
}

// Refactoring Practice
function printBuzz() {
    console.log("Buzz");
}
function printFizz() {
    console.log("Fizz");
}
function printFizzBuzz() {
    console.log("FizzBuzz");
}
