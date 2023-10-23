let popup;

document.addEventListener("mouseover", function (event) {
  const target = event.target;
  const specificUrlPattern = /clip\/IronicArtisticOrcaWTRuck/; // Updated pattern

  if (target.tagName === "A" && specificUrlPattern.test(target.href)) {
    showPopup(target);
  }
});

document.addEventListener("mousemove", function (event) {
  if (popup) {
    movePopup(event.clientX);
  }
});

document.addEventListener("mouseout", function (event) {
  const target = event.target;
  const specificUrlPattern = /clip\/IronicArtisticOrcaWTRuck/; // Updated pattern

  if (target.tagName === "A" && specificUrlPattern.test(target.href)) {
    removePopup();
  }
});

function showPopup(targetElement) {
  popup = document.createElement("img");
  popup.src = "https://imgur.com/SR88zJL.png";
  popup.style.position = "fixed";
  document.body.appendChild(popup);

  const rect = targetElement.getBoundingClientRect();
  popup.style.left = `${rect.left}px`;
  popup.style.top = `${rect.top - popup.height}px`;
}

function movePopup(xPosition) {
  if (popup) {
    const imageWidth = popup.width;
    const centeredXPosition = xPosition - imageWidth / 2;
    popup.style.left = `${centeredXPosition}px`;
  }
}

function removePopup() {
  if (popup) {
    popup.remove();
    popup = null;
  }
}
