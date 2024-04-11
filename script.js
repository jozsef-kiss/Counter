//Initialize
let init = 0;


//Variables
let counter = document.querySelector(".counter");
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");
let positiveNegative = document.querySelector(".counter").classList;


//Default value
document.querySelector(".counter").innerHTML = init;


//Create Callback Function
function increase(){
    init++;
}

function decrease(){
    init--;
}

function reset(){
    init = 0;
}


//Negative or Positive Function color logic
function negposColor(){

    let negativePositiv = Math.sign(init);

    if ( negativePositiv === 1 ) {
        positiveNegative.add("positive");
        positiveNegative.remove("negative");
    } else if (negativePositiv === -1 ) {
        positiveNegative.add("negative");
        positiveNegative.remove("positive");
    } else if (negativePositiv === 0 ){
        positiveNegative.remove("negative");
        positiveNegative.remove("positive");
    }

}


//Create decrease button eventlistener
button1.addEventListener("click", counterDec);


//Create reset button eventlistener
button2.addEventListener("click", counterRes);


//Create increase button eventlistener
button3.addEventListener("click", counterInc);


//Decrease Function
function counterDec(){

    decrease(); 

    counter.innerHTML = init;

    negposColor();
}


//Reset Function
function counterRes(){

    reset();

    counter.innerHTML = init;

    negposColor();
    
}


//Increase Function
function counterInc(){

    increase();

    counter.innerHTML = init;

    negposColor();
}