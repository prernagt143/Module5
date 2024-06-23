function turnOnRed(){
    document.getElementById('stopButton').textContent=='Stop';
    document.getElementById('stopLight').style.backgroundColor='red';
    document.getElementById('readyLight').style.backgroundColor='grey';
    document.getElementById('goLight').style.backgroundColor='grey';
    document.getElementById('stopButton').style.backgroundColor='red';
    document.getElementById('readyButton').style.backgroundColor='#1f1d41';
    document.getElementById('goButton').style.backgroundColor='#1f1d41';


}
function turnOnYellow(){
    document.getElementById('readyButton').textContent=='Ready';
    document.getElementById('readyLight').style.backgroundColor='yellow';
    document.getElementById('stopLight').style.backgroundColor='grey';
    document.getElementById('goLight').style.backgroundColor='grey';
    document.getElementById('readyButton').style.backgroundColor='yellow';
    document.getElementById('stopButton').style.backgroundColor=' #1f1d41';
    document.getElementById('goButton').style.backgroundColor=' #1f1d41';


}
function turnOnGreen(){
    document.getElementById('goButton').textContent=='Go'
    document.getElementById('goLight').style.backgroundColor='green';
    document.getElementById('readyLight').style.backgroundColor='grey';
    document.getElementById('stopLight').style.backgroundColor='grey';
    document.getElementById('goButton').style.backgroundColor='green';
    document.getElementById('readyButton').style.backgroundColor='#1f1d41';
    document.getElementById('stopButton').style.backgroundColor=' #1f1d41';


}