document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let widgetWrapper = document.getElementById("my-third-party-data");
    let cardWrapper = document.createElement("div");
    cardWrapper.classList.add("third-party-card-wrapper");
    for (let i = 0; i < 3; i++) {
      let card = document.createElement("div");
      card.appendChild(document.createTextNode(`Card ${i + 1}`));
      card.classList.add("third-party-card");
      cardWrapper.appendChild(card);
    }
    widgetWrapper.appendChild(cardWrapper);
  }, 1500);
});
