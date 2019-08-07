console.log("up and running");
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [ ];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match");
    } else {
        console.log("sorry, try again.");
    }
    
}


function flipCard(cardId) {
    
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[0]);

if (cards.length === 2) {
checkForMatch();
} 

}
flipCard(0);
flipCard(2);
checkForMatch();
