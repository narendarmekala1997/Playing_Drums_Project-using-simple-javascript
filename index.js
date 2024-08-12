

function playSound(event){

  switch (event) {
    case "w":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
   case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
               break;
  case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
              break;
  case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
  case "j":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
  case "k":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
 case "l":
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
default:
        console.log(innerHTML);

  }

}

var buttons = document.querySelectorAll(".drum");
for(var i=0 ; i<buttons.length ; i++){
  buttons[i].addEventListener("click",function (){
    var innerHTML = this.innerHTML;
    playSound(innerHTML);
  });

  document.addEventListener("keydown", function(event){

  playSound(event.key);
  });
}
