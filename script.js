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

