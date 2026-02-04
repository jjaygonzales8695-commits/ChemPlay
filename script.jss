// Create an array to store the deck of cards
let deck = [];

// Create an array to store the selected card
let selectedCard = null;

// Function to show cards in deck
function showCards() {
  // Clear the display area
  document.getElementById("cards-in-deck").innerHTML = "";

  // Loop through the deck and display each card
  for (let i = 0; i < deck.length; i++) {
    let card = deck[i];
    let cardHTML = `<div class="card" onclick="selectCard(${i})">${card.rank} of ${card.suit}</div>`;
    document.getElementById("cards-in-deck").innerHTML += cardHTML;
  }
}

// Function to select a card
function selectCard(index) {
  // Get the selected card
  selectedCard = deck[index];

  // Display the selected card
  document.getElementById("selected-card").innerHTML = `You selected: ${selectedCard.rank} of ${selectedCard.suit}`;

  // Remove the selected card from the deck
  deck.splice(index, 1);
}

// Initialize the deck with 52 cards (4 suits x 13 ranks)
for (let suit of ["Hearts", "Diamonds", "Clubs", "Spades"]) {
  for (let rank of ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]) {
    deck.push({ rank: rank, suit: suit });
  }
}

// Shuffle the deck
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}