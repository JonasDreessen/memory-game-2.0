// Get all the elements with class .card [gives an array]

const getCardClass = document.querySelectorAll(".card");
let firstCard, secondCard;
var clickCounter = 0;
var openedCards = [];
var allCardClasses = document.querySelectorAll(".card");


function flipCardToBackSide() {
 // add a class to the clicked class 
    this.classList.add("flip-card-animation");
// push the clicked card in the openendCards array
    openedCards.push(this);
// Create a variable that measures the length of the openedCards array
    var len = openedCards.length;

    if(len == 2){
// if 2 cards are pushed in the array then activate moveCounter();
        moveCounter();
// Compare the 2 data-card values
        if(openedCards[0].dataset.card === openedCards[1].dataset.card){
// If values === then activate funtion match();
            match();
        } else{
// If values !=== then activate function noMatch();
            noMatch();
        }
    }
};





function moveCounter(){
    console.log("moveCounter ++");
}

function match(){
    console.log("match");
}

function noMatch (){
    console.log("no match")
}
// this gives each element in the array getCardClass an eventListener
getCardClass.forEach(getCardClass => getCardClass.addEventListener("click", flipCardToBackSide));