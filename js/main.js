console.log("up and running");
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [ ];

console.log("User flipped" + cards[0]);
    cardsInPlay.push(cards[0]);
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [ ];
    
console.log("User flipped" + cards[2]);
    cardsInPlay.push(cards[2]);

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match");
}   else {
    console.log("sorry, try again.");
} 
}

checkForMatch();