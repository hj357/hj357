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

// Audio files
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

  // Change the minutes and seconds to starting time
  session_minutes = 24;
  session_seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);


  // Functions
  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }


  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Take a Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        breakSound.play();  
        breakTimer();

      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  function breakTimer(){
    focusSound.play();

    // Change the minutes and seconds to starting time
    session_minutes = 4;
    session_seconds = 59;
  
    // Add the seconds and minutes to the page
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  
  // Start the countdown
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

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        breakSound.play();  
      }
}


}
}
}
}