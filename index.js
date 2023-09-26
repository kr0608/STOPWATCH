var hours=0;
var minutes=0;
var seconds=0;
var milSec=0;

var btnStart=document.getElementById("start");
var btnStop=document.getElementById("stop");
var btnReset=document.getElementById("reset");

var appendHours=document.getElementById("hours");
var appendMinutes=document.getElementById("minutes");
var appendSeconds=document.getElementById("seconds");
var appendMilliSeconds=document.getElementById("milSec");

btnStart.onclick=function(){
    Interval=setInterval(startTimer,10);
}

btnStop.onclick=function(){
    clearInterval(Interval);
}

btnReset.onclick=function(){
    clearInterval(Interval);
    hours="00";
    minutes="00";
    seconds="00";
    milSec="00";
    appendHours.innerHTML=hours;
    appendMinutes.innerHTML=minutes;
    appendSeconds.innerHTML=seconds;
    appendMilliSeconds.innerHTML=milSec;
}

function startTimer(){
    milSec++;

    if(milSec<9){
        appendMilliSeconds.innerHTML="0" + milSec;
    }
    if(milSec>9){
        appendMilliSeconds.innerHTML=milSec;

    }
    if(milSec>99){
        seconds++;
        appendSeconds.innerHTML="0"+ seconds;
        milSec=0;
        appendMilliSeconds.innerHTML="0"+ milSec;
    }

    if(seconds>9){
        appendSeconds.innerHTML=seconds;
    }
    if(seconds>59){
        minutes++;
        appendMinutes.innerHTML="0"+ minutes;
        seconds=0;
        appendSeconds.innerHTML="0"+ seconds;
    }
 
    if(minutes>59){
        appendMinutes.innerHTML=minutes;
    }
    if(minutes>59){
        hours++;
        appendHours.innerHTML="0"+ hours;
        minutes=0;
        appendMinutes.innerHTML="0"+ 0;
    }

}