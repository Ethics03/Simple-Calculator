//calculator program

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;


}
function ClearDisplay()
{
display.value = "";

}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/642");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  }
  );

  button.addEventListener('mouseout',() => {
    audio.stop();

})});