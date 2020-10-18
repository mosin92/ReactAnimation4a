var frame = [
    { transform: 'translateX(0px)' },
    {transform :'translateX(900px)'}
];

var timing = {
    duration: 3000,
    iterations: Infinity,
    playbackRate: -2
};

var background = document.getElementById("images");

var backgroundMovement = background.animate(frame,timing);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2;

setInterval(function () {
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .9;
    }
},3000)
var runfast = function(){
    backgroundMovement.playbackRate += 0.2;

}

document.addEventListener("click", runfast);