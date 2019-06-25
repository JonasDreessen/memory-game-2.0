// Get all the elements with class .card [gives an array]

const getCardClass = document.querySelectorAll(".card");
let firstCard, secondCard;
var clickCounter = 0;

function flipCardToBackSide() {
    // Add the class to flip the card so the bgpicture is visible.
    this.classList.add("flip-card-animation");
    clickCounter++;

    if (clickCounter === 1) {

        console.log("clickcounter is 1");

    } else if (clickCounter === 2) {

        console.log("clickcounter is 2");
        clickCounter = 0;
    }
};





// this gives each element in the array getCardClass an eventListener
getCardClass.forEach(getCardClass => getCardClass.addEventListener("click", flipCardToBackSide));