/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const symbolClasses = ['diamond','paper-plane-o','anchor','bolt','cube','leaf','bicycle','bomb'];
const defaultSymbolOrder = [0,1,2,3,4,2,5,6,0,7,5,7,3,6,1,4];
const currentSymbolOrder = defaultSymbolOrder;

const deck = document.querySelector(".deck");
for (let i=0; i<16; ++i) {
    const element = document.createElement('li');
    element.classList.add('card');
    if (i == 2 || i == 5) {
        element.classList.add('open');
        element.classList.add('show');
        element.classList.add('match');
    }
    if (i == 12) {
        element.classList.add('open');
        element.classList.add('show');
    }
    const symbol = document.createElement('i');
    symbol.classList.add('fa');
    symbol.classList.add('fa-' + symbolClasses[currentSymbolOrder[i]]);
    element.appendChild(symbol);
    deck.appendChild(element);
}

const cards = document.querySelectorAll(".card");
for(const card of cards) {
    card.addEventListener('click', function() {
        window.alert('a card was clicked!');
    });
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
