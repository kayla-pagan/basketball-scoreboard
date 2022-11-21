let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let homeCount = 0
let awayCount = 0

function awayAddOnePoints() {
    awayCount += 1
    awayEl.textContent = awayCount
}

function awayAddTwoPoints() {
    awayCount += 2
    awayEl.textContent = awayCount
}

function awayAddThreePoints() {
    awayCount += 3
    awayEl.textContent = awayCount
}

function homeAddOnePoints() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function homeAddTwoPoints() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function homeAddThreePoints() {
    homeCount += 3
    homeEl.textContent = homeCount
}

var time=24*60,r=document.getElementById('countdown'),tmp=time;

setInterval(function(){
    var c=tmp--,m=(c/60)>>0,s=(c-m*60)+'';
    r.textContent=m+':'+(s.length>1?'':'0')+s
    tmp!=0||(tmp=time);
},1000);