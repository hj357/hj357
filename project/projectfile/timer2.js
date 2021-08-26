function showDetail() //뽀모도로 타이머 설명 보여주기
{
document.querySelector("#describe").style.display = "block";
document.querySelector("#open").style.dispaly = "none";
}

function hideDetail() //설명 닫기
{
document.querySelector("#describe").style.display = "none";
document.querySelector("#open").style.display = "block";
}

var focusSound = new Audio("projectfile/focusbuzzer.mp3");
var breakSound  = new Audio("projectfile/breakbuzzer.mp3");


// Required variables
var session_seconds = "00";
var session_minutes = 25;

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}




function start_timer() {
  focusSound.play();

  session_minutes = 24;
  session_seconds = 59;

  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  document.getElementById("done").innerHTML =
  "FOCUS!";

  document.getElementById("done").classList.add("show_message");

  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }


  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    if (session_seconds <= 0) {
      if (session_minutes <= 0) {

        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("done").innerHTML =
          "Take a Break!";
        document.getElementById("done").classList.add("show_message");

        breakSound.play();  
        breakTimer();
      }
      // Reset the session seconds to 60
      session_seconds = parseInt(60);
    }
  function breakTimer(){
    focusSound.play();

    session_minutes = 4;
    session_seconds = 60;
  

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval2 = setInterval(secondsTimer2, 1000);    

  function secondsTimer2(){

    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    if (session_seconds <= 0 ) {
      if (session_minutes <= 0) {

        clearInterval(minutes_interval);
        clearInterval(seconds_interval2);        

        document.getElementById("done").innerHTML =
          "Session Completed!!";

        document.getElementById("done").classList.add("show_message");

        breakSound.play();  
      }
      session_seconds = parseInt(60);
    }
    }
    }
}
}
