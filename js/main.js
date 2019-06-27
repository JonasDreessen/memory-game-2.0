const getCardContainerClass = document.querySelectorAll(".card-container");
const getCardClass = document.querySelectorAll(".card");
const movesID = document.getElementById("moves");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const resetLabel = document.getElementById("reset");
var allCardClasses = document.querySelectorAll(".card");
var clickCounter = 0;
var amountOfMoves = 0;
var openedCards = [];
var totalSeconds = 0;



resetLabel.addEventListener("click",function(){
    window.location.reload();
});



// Generate a random position for the cards. 
function randomPosition() {
    for (var i = 0; i < getCardContainerClass.length; i++) {
        var target = Math.floor(Math.random() * getCardContainerClass.length + 1)
        getCardContainerClass[i].style.order = target;
    }
}
randomPosition();

function flipCardToBackSide() {
    // add a class to the clicked class 
    this.classList.add("flip-card-animation");
    // push the clicked card in the openendCards array
    openedCards.push(this);
    var len = openedCards.length;

    if (len == 2) {
        // every 2 clicks on the cards will activate the moveCounter 
        moveCounter();

        if (openedCards[0].dataset.card === openedCards[1].dataset.card) {
            // If values === then activate funtion match();
            match();
        } else {
            stopEventListener();
            setTimeout(noMatch, 400);
        }
    }
    winningGame();
};

// the counter will go up by one 
function moveCounter() {
    amountOfMoves++;
    movesID.innerHTML = amountOfMoves;
}

// if there is a match it will leave the cards turned. 
function match() {
    openedCards[0].classList.add("flip-card-animation2");
    openedCards[1].classList.add("flip-card-animation2");
    openedCards[0].classList.remove("flip-card-animation");
    openedCards[1].classList.remove("flip-card-animation");

    openedCards.length = 0;
}
// If there is no match the card will return back to the front ? 
function noMatch() {
    let flipCardAnimation = document.querySelectorAll(".flip-card-animation");

    flipCardAnimation[0].classList.remove("flip-card-animation");
    flipCardAnimation[1].classList.remove("flip-card-animation");
    openedCards.length = 0;
    stopEventListener();
}


// this gives each element in the array getCardClass an eventListener
function startEventListener() {

    getCardClass.forEach(getCardClass => getCardClass.addEventListener("click", flipCardToBackSide));
};
startEventListener();

// this stop the eventlistener for 600 miliseconds. 
function stopEventListener() {

    getCardClass.forEach(getCardClass => getCardClass.removeEventListener("click", flipCardToBackSide));
    setTimeout(startEventListener, 600);
};


// Count up clock
// create a var for the intervalID so it can be stopped when won
var timerInterval = setInterval(setTime, 1000);
timerInterval;

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// Function that gives the winning message when all cards are turned.
function winningGame(){
    var flipCardAnimation2 = document.querySelectorAll(".flip-card-animation2");


    if (flipCardAnimation2.length === getCardClass.length){
        document.querySelector(".winning-screen").style.display = 'block';
        clearInterval(timerInterval);

    } else {
        return;
    }
}





