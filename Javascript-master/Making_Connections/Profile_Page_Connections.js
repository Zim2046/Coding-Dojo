

var requests = 2;
var connections = 418;
var newName = "Itsmy Different Name";
// var countPhil = 12;
var connectElement = document.querySelector("#connections")
var requestElement = document.querySelector("#requests")
var profileNameElement = document.querySelector("#userName")

function addToListTodd(countElement,requestElement){
    connections++
    requests--
    countElement.innerText = connections;
    requestElement.innerText = requests;
    document.querySelector("#todd").remove();
}
function addToListPhil(countElement,requestElement){
    connections++
    requests--
    countElement.innerText = connections;
    requestElement.innerText = requests;
    document.querySelector("#phil").remove();
}
function removeTodd(requestElement){
    requests--
    requestElement.innerText = requests;
    document.querySelector("#todd").remove();
}
function removePhil(requestElement){
    requests--
    requestElement.innerText = requests;
    document.querySelector("#phil").remove();
}
function changeProfileName(profileNameElement){
    profileNameElement.innerText = newName;
}




