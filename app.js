var timer = 60;
var score = 0;
var hitRandomNumber = 0;
function getTime() {
  setInterval(() => {
    
    if (timer > 0) {
      timer--;
      document.querySelector("#getTimer").textContent = timer;
    }
    if(timer==0)
    {
        endGame();
    }
  }, 1000);
  
}


function hitBubble() {
  hitRandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitbubble").textContent = hitRandomNumber;
}

function bubbles() {
  var clutter = "";
  for (var i = 0; i <= 153; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".buttom").innerHTML = clutter;
}
function getScore() {
  score += 10;
  console.log("clicked");
  document.querySelector("#getScore").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  console.log(Number(details.target.textContent));
  if (clickedNumber === hitRandomNumber) {
    getScore();
    hitBubble();
    bubbles();
  }
  else{
    alert("You selecetd Wrong number")
    
  }
});


function endGame(){
  
    document.querySelector(".buttom").innerHTML=`<h3>Thanks for playing the game.
    Your total score is ${score}.</h3>`
    
}




bubbles();
getTime();
hitBubble();

