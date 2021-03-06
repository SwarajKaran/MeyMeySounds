// Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".meme").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
}


// Detecting Keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var mcph = new Audio("sounds/MCPH.mp3");
      mcph.play();
      break;
    case "s":
      var gorm = new Audio("sounds/GORM.mp3");
      gorm.play();
      break;
    case "d":
      var pfmn = new Audio("sounds/PFMN.mp3");
      pfmn.play();
      break;
    case "f":
      var babu = new Audio("sounds/BABU.mp3");
      babu.play();
      break;
    case "g":
      var mmch = new Audio("sounds/MMCH.mp3");
      mmch.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
