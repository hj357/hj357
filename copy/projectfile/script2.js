


var selectFocusTime = document.testForm.focusTime;
var selectBreakTime = document.testForm.breakTime;
var selectCycle = document.testForm.cycle;

const focusBuzzer = new Audio("projectfile/focusbuzzer.mp3");
const breakBuzzer = Audio("projectfile/breakbuzzer.mp3");


function bringValue() //타이머시작을 위한 값 가져오기 //일단 알람으로 값을 가져오는지 봅시다.
{
var selected1 = selectFocusTime.options[selectFocusTime.selectedIndex].value;
var selected2 = selectBreakTime.options[selectBreakTime.selectedIndex].value;
var selected3 = selectCycle.value;
alert(focusBuzzer.play() + "[" + selected1 + selected2 + selected3 + "]를 선택했습니다.")
}
 
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;

    time = time < 0 ? 0 : time; 
    }