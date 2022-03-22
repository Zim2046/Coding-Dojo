console.log("page loaded...");

function playVid(element){
    element.play()
    element.muted = true
}

function pauseVid(element){
    element.pause()
    element.muted = false

}

function unMuteReadyPlay(element){
    element.muted = false
}
