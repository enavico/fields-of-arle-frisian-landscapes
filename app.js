// Mazzi di carte
const deckA = Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(2, "0"));
const deckB = Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(2, "0"));
const deckC = Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(2, "0"));

const cardsContainer = document.getElementById("cards");
const randomizeBtn = document.getElementById("randomizeBtn");

// Costruisci percorso immagine da mazzo e numero
function getCardImage(deck, num) {
  return `assets/cards/${deck}/Front_${deck}_${num}.png`;
}

// Mostra le carte
function showCards(cards) {
  cardsContainer.innerHTML = "";
  cards.forEach(card => {
    const img = document.createElement("img");
    img.src = card;
    img.className = "card-image";
    cardsContainer.appendChild(img);
  });
}

// Pesca casualmente
function drawOne(deck) {
  return deck[Math.floor(Math.random() * deck.length)];
}

// Randomizza carte e aggiorna URL
function randomizeCards() {
  const a = drawOne(deckA);
  const b = drawOne(deckB);
  const c = drawOne(deckC);

  const drawn = [
    getCardImage("A", a),
    getCardImage("B", b),
    getCardImage("C", c)
  ];

  showCards(drawn);

  // Aggiorna URL
  const newUrl = `${location.origin}${location.pathname}?a=${a}&b=${b}&c=${c}`;
  history.replaceState(null, '', newUrl);
}

// Carica setup da URL se presente
function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  let a = params.get("a");
  let b = params.get("b");
  let c = params.get("c");

  if (!a || !b || !c) {
    // Nessun setup in URL, pesca a caso
    randomizeCards();
    return;
  }

  const drawn = [
    getCardImage("A", a),
    getCardImage("B", b),
    getCardImage("C", c)
  ];

  showCards(drawn);
}

// Event listener
randomizeBtn.addEventListener("click", randomizeCards);
window.addEventListener("load", loadFromUrl);
