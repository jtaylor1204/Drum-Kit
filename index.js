let numberOfButtons = document.querySelectorAll(".drum").length;

let crash = new Audio('sounds/crash.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let snare = new Audio ('sounds/snare.mp3');
let tom2 = new Audio ('sounds/tom-2.mp3');
let tom3 = new Audio ('sounds/tom-3.mp3');
let kick = new Audio ('sounds/kick-bass.mp3');
let tom4 = new Audio ('sounds/tom-4.mp3');


// Detecting Button Press
for(let i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimination(buttonInnerHTML);
        changeColors(buttonInnerHTML);
    });
};

// Detecting Keyboard Press
document.addEventListener('keydown', function(event){
    makeSound(event.key);
    buttonAnimination(event.key);
    changeColors(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            crash.play();
            break;
       case "a":
            tom1.play(); 
            break;
        case "s":
           snare.play();
           break;
        case "d":
            tom2.play();
            break;
        case "j":
            tom3.play();
            break;
        case "k":
            kick.play();
            break;
        case "l":
            tom4.play();
            break;
        default: console.log(buttonInnerHTML);
}
};


function buttonAnimination(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1000);
}

function changeColors(currentKey){
    let buttonPressed = document.querySelector("." + currentKey);
    buttonPressed.style.color = "#04da0f";
    setTimeout(function(){
        buttonPressed.style.color = "#da0f04";
    }, 1000);
    
}






