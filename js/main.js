// Get all the elements with class .card [gives an array]

const getCardClass = document.querySelectorAll(".card");
let firstCard, secondCard;
var clickCounter = 0;

function flipCardToBackSide() {
    // Add the class to flip the card so the bgpicture is visible.
    /* TRYOUT 
    this.classList.add("flip-card-animation");
    var clickedCards = document.querySelectorAll(".flip-card-animation"); */

    clickCounter++;

    if (clickCounter === 1) {
        this.classList.add("flip-card-animation");
        var clickedCards = document.querySelectorAll(".flip-card-animation");
        // Here It will get the second class of the second child of the .flip-card-animation class.
        clickedCards.forEach(card => console.log(card.children[1].classList[1]));

    } else if (clickCounter === 2) {
        this.classList.add("flip-card-animation2");
        var clickedCards2 = document.querySelectorAll(".flip-card-animation2");

        clickedCards2.forEach(card2 => console.log(card2.children[1].classList[1]));
        clickCounter = 0;
    }
};





// this gives each element in the array getCardClass an eventListener
getCardClass.forEach(getCardClass => getCardClass.addEventListener("click", flipCardToBackSide));