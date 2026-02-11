// Mazzi
const deckA = Array.from({ length: 16 }, (_, i) => `assets/cards/A/Front_A_${String(i + 1).padStart(2, "0")}.png`);
const deckB = Array.from({ length: 16 }, (_, i) => `assets/cards/B/Front_B_${String(i + 1).padStart(2, "0")}.png`);
const deckC = Array.from({ length: 16 }, (_, i) => `assets/cards/C/Front_C_${String(i + 1).padStart(2, "0")}.png`);

const cardsContainer = document.getElementById("cards");
const randomizeBtn = document.getElementById("randomizeBtn");

// Pesca una carta casuale
function drawOne(deck) {
  return deck[Math.floor(Math.random() * deck.length)];
}

// Mostra le carte nel container
function showCards(cards) {
  cardsContainer.innerHTML = "";
  cards.forEach(card => {
    const img = document.createElement("img");
    img.src = card;
    img.className = "card-image";
    cardsContainer.appendChild(img);
  });
}

// Randomizza e salva su localStorage
function randomizeCards() {
  const drawn = [
    drawOne(deckA),
    drawOne(deckB),
    drawOne(deckC),
  ];

  showCards(drawn);

  // salva le carte nel browser
  localStorage.setItem("lastDrawnCards", JSON.stringify(drawn));
  console.log("Carte salvate in localStorage:", drawn);
}

// Carica carte salvate all’avvio
function loadLastDraw() {
  const saved = localStorage.getItem("lastDrawnCards");
  if (saved) {
    const cards = JSON.parse(saved);
    showCards(cards);
    console.log("Carte caricate da localStorage:", cards);
  } else {
    console.log("Nessuna carta salvata in localStorage");
  }
}

// Event listener
randomizeBtn.addEventListener("click", randomizeCards);

// Al caricamento della pagina
window.addEventListener("load", loadLastDraw);
