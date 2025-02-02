const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear")
            display.innerText="";
        else if(item.id=="backspace")
        {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        else if(display.innerText!="" && item.id=="equal")
        {
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText == "" && item.id == "equal")
        {    display.innerText = "Empty!";
            setTimeout(()=>(display.innerText=""),2000);
        }
        else
        display.innerText+=item.id;

    }
});

const theme = document.querySelector(".theme-toggle");
const calcu = document.querySelector(".calc");

let dark = true;
theme.onclick = ()=>{
    calcu.classList.toggle("dark");
    theme.classList.toggle("active");
    dark= !dark;
};

