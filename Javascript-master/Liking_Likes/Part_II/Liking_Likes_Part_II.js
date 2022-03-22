// Storing their initial values in an array instead
var likesArray = [{ "countNiel": 9},{"countNichole": 12},{"countJim" :9}]

// var countNiel = 9;
var countNielElement = document.querySelector("#Niel p")
// var countNichole = 12;
var countNicholeElement = document.querySelector("#Nichole p")
// var countJim = 9;
var countJimElement = document.querySelector("#Jim p")

function addALikeNiel(countElement){
    likesArray[0].countNiel++
    countElement.innerText = likesArray[0].countNiel + " Like(s)";
}

function addALikeNichole(countElement){
    likesArray[1].countNichole++
    countElement.innerText = likesArray[1].countNichole + " Like(s)";
}

function addALikeJim(countElement){
    likesArray[2].countJim++
    countElement.innerText = likesArray[2].countJim + " Like(s)";
}