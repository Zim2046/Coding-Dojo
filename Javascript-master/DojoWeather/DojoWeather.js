var messageElement = document.querySelector('#message')

function alertLoad(){
    alert('Loading weather reports...')
}
function removeCookies(element){
  messageElement.remove()
}

//Bonus

//todo OnSelect functions  
var tempValuesHigh = document.querySelectorAll('.high');
// console.log(tempValuesHigh[0].innerText)

var tempValuesLow = document.querySelectorAll('.low');
// console.log(tempValuesLow[0].innerText)
// console.log(parseInt(tempValuesLow[0].innerText))

function tempConvert(element){
    
    if(element.value != '°C'){
        console.log("The units  are: ",element.value);
        for (var index = 0; index < tempValuesHigh.length; index++) {
            const currentHighTemp = parseInt(tempValuesHigh[index].innerText)  * (9/5)+32;
            var truncatedVal_H_C2F = Math.trunc(currentHighTemp)
            console.log(truncatedVal_H_C2F)
            tempValuesHigh[index].innerText = truncatedVal_H_C2F
        }
        for (var index = 0; index < tempValuesLow.length; index++) {
            const currentLowTemp = parseInt(tempValuesLow[index].innerText)  * (9/5)+32;
            var truncatedVal_L_C2F = Math.trunc(currentLowTemp)
            console.log(truncatedVal_L_C2F)
            tempValuesLow[index].innerText = truncatedVal_L_C2F
        }
    }
    else{
        console.log("The units  are: ",element.value);
        for (var index = 0; index < tempValuesHigh.length; index++) {
            const currentHighTemp = (parseInt(tempValuesHigh[index].innerText) - 32)  * 5/9;
            var truncatedVal_H_F2C = Math.trunc(currentHighTemp)
            console.log(truncatedVal_H_F2C)
            tempValuesHigh[index].innerText = truncatedVal_H_F2C
        }
        for (var index = 0; index < tempValuesLow.length; index++) {
            const currentLowTemp = (parseInt(tempValuesLow[index].innerText) - 32)  * 5/9;
            var truncatedVal_LF2C = Math.trunc(currentLowTemp)
            console.log(truncatedVal_LF2C)
            tempValuesLow[index].innerText = truncatedVal_LF2C
        }
    }

}
