const openModal = (event) => {
  console.log("inizio funzione");
  var card = event.currentTarget;
  var pseudoElement = window.getComputedStyle(card, "::before");
  var imgSrc = pseudoElement.getPropertyValue("background-image");
  imgSrc = imgSrc.slice(5, -2); // Rimuovi url("...") da imgSrc
  document.getElementById("modalImage").src = imgSrc;
  console.log("fine funzione");
};
