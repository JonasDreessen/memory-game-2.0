const getCardContainerClass = document.querySelectorAll(".card-container");
const getCardClass = document.querySelectorAll(".card");
const movesID = document.getElementById("moves");
const timeSpendID = document.getElementById("time-spend");
const resetID = document.getElementById("reset");
var allCardClasses = document.querySelectorAll(".card");
var clickCounter = 0;
var amountOfMoves = 0;
var openedCards = [];


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

        moveCounter();

        if (openedCards[0].dataset.card === openedCards[1].dataset.card) {
            // If values === then activate funtion match();
            match();
        } else {
            stopEventListener();
            setTimeout(noMatch, 400);
        }
    }
};


function moveCounter() {
    amountOfMoves++;
    movesID.innerHTML = amountOfMoves;
}

function match() {
    /*openedCards[0].classList.remove("card");
     openedCards[1].classList.remove("card");
     */
    openedCards[0].classList.add("flip-card-animation2");
    openedCards[1].classList.add("flip-card-animation2");
    openedCards[0].classList.remove("flip-card-animation");
    openedCards[1].classList.remove("flip-card-animation");

    openedCards.length = 0;

}

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