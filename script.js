let screen = document.getElementById("screen")
button = document.querySelectorAll('button')
let screenValue = ''

for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}