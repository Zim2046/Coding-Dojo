var count = 3; // initial likes
var countElement = document.querySelector(".top p")

function addALike(countElement){
    count++
    countElement.innerText = count + " Like(s)";
}