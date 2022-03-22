// 1.) Always Hungry
function alwaysHungry(arr) {

    for(var i = 0; i < arr.length; i++){
        var emptyFoodBox = "I'm hungry"
        if(arr[i]==="food"){
            console.log("yummy");
            emptyFoodBox = "yummy";
        }
    }

    if(emptyFoodBox!= "yummy"){
        console.log(emptyFoodBox)
    }
}

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


