window.onload=function(){roadAnimation()};
window.onresize=function(){roadAnimation()};

function roadAnimation(){
document.getElementById("road").style.animationDuration =  (window.innerWidth / 200) + "s";
}