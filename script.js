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


document.onkeyup =  e => {
    if(e.key == "+"){
        display.value += "+";
    }
    else if(e.key == "7"){
        display.value += "7";
    }
    else if(e.key == "8"){
        display.value += "8";
    }
    else if(e.key == "9"){
        display.value += "9";
    }
    else if(e.key == "-"){
        display.value += "-";
    }
    else if(e.key == "4"){
        display.value  += "4";
    }
    else if(e.key == "5"){
        display.value += "5";
    }
    else if(e.key == "6"){
        display.value += "6";
    }
    else if(e.key == "*"){
        display.value += "*";
    }
    else if(e.key == "1"){
        display.value += "1";
    }
    else if(e.key == "2"){
        display.value  += "2";
    }
    else if(e.key == "3"){
        display.value  += "3";
    }
    else if(e.key == "/"){
        display.value += "/";
    }
    else if(e.key == "0"){
        display.value  += "0";
    }
    else if(e.key == "."){
        display.value  += ".";
    }
    else if(e.key == "="){
        display.value = eval(display.value);
    }
    else if(e.key == "C"){
        display.value = "";
    }


}