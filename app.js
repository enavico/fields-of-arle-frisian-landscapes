// ===== MAZZI CON NOMI REALI =====
const deckA = Array.from({ length: 16 }, (_, i) => `assets/cards/A/Front_A_${String(i + 1).padStart(2, "0")}.png`);
const deckB = Array.from({ length: 16 }, (_, i) => `assets/cards/B/Front_B_${String(i + 1).padStart(2, "0")}.png`);
const deckC = Array.from({ length: 16 }, (_, i) => `assets/cards/C/Front_C_${String(i + 1).padStart(2, "0")}.png`);

// ===== CONTAINER E BOTTONE =====
const cardsContainer = document.getElementById("cards");
const randomizeBtn = document.getElementById("randomizeBtn");

// ===== FUNZIONE PER PESCARE 1 CARTA DA UN MAZZO =====
function drawOne(deck) {
  return deck[Math.floor(Math.random() * deck.length)];
}

// ===== FUNZIONE PRINCIPALE: PESCA 1 CARTA DA OGNUNO DEI TRE MAZZI =====
function randomizeCards() {
  cardsContainer.innerHTML = ""; // reset del container

  const drawn = [
    drawOne(deckA),
    drawOne(deckB),
    drawOne(deckC),
  ];

  drawn.forEach(card => {
    const img = document.createElement("img");
    img.src = card;
    img.className = "card-image";
    cardsContainer.appendChild(img);
  });
}

// ===== EVENT LISTENER SUL BOTTONE =====
randomizeBtn.addEventListener("click", randomizeCards);
