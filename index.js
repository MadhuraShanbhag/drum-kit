// document.querySelector("button").addEventListener("click", handleClick);
//

var numberOfDrums = document.querySelectorAll(".drum");
for (var i = 0; i < numberOfDrums.length; i++) {
  numberOfDrums[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}


function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;


    default:
      console.log(key);

  }

}

function btnAnimation(currentKey){
  activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  window.setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}


document.addEventListener("keydown", function(event) {
  playSound(event.key);
  btnAnimation(event.key);
});
