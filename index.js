// alert("Hello");
var arrayButtons = document.querySelectorAll(".drum");
for (var i = 0; i < arrayButtons.length; i++) {
  arrayButtons[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML;
    // // console.log(this.innerHTML);
    // this.classList.add("white");
    playSound(buttoninnerHTML);
    buttonAnimaton(buttoninnerHTML);
  });
}


document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  playSound(keyPressed);
  buttonAnimaton(keyPressed);
});


function playSound(key) {
  switch (key) {
    case "w":
      var audioSound = new Audio("sounds/kick-bass.mp3");
      audioSound.play()
      break;
    case "a":
      var audioSound = new Audio("sounds/crash.mp3");
      audioSound.play()
      break;
    case "s":
      var audioSound = new Audio("sounds/snare.mp3");
      audioSound.play()
      break;
    case "d":
      var audioSound = new Audio("sounds/tom-1.mp3");
      audioSound.play()
      break;
    case "j":
      var audioSound = new Audio("sounds/tom-2.mp3");
      audioSound.play()
      break;
    case "k":
      var audioSound = new Audio("sounds/tom-3.mp3");
      audioSound.play()
      break;
    case "l":
      var audioSound = new Audio("sounds/tom-4.mp3");
      audioSound.play()
      break;
    default:
      console.log(key);

  };
}


function buttonAnimaton(key){
  var className='.'+key;
  document.querySelector(className).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(className).classList.remove("pressed");
  },10);


}
