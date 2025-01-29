

// script.js
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");

let currentIndex = 0;
let isTransitioning = false;

// Duplicar itens no início e no final para o loop infinito
const firstItemClone = items[0].cloneNode(true);
const lastItemClone = items[items.length - 1].cloneNode(true);

carousel.appendChild(firstItemClone); // Adiciona o clone do primeiro ao final
carousel.insertBefore(lastItemClone, items[0]); // Adiciona o clone do último no início

const updatedItems = document.querySelectorAll(".carousel-item");
currentIndex = 1; // Começa no primeiro item "real"

// Atualiza o posicionamento inicial
carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

function updateCarousel() {
  if (isTransitioning) return;

  isTransitioning = true;

  carousel.style.transition = "transform 0.5s ease-in-out";
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Aguardar a transição antes de manipular o loop infinito
  carousel.addEventListener(
    "transitionend",
    () => {
      isTransitioning = false;

      // Se for o clone no final, volta ao primeiro item real sem transição
      if (currentIndex === updatedItems.length - 1) {
        carousel.style.transition = "none";
        currentIndex = 1; // Primeiro item real
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      // Se for o clone no início, volta ao último item real sem transição
      if (currentIndex === 0) {
        carousel.style.transition = "none";
        currentIndex = updatedItems.length - 2; // Último item real
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    },
    { once: true } // Remove o evento automaticamente após ser chamado
  );
}

prevButton.addEventListener("click", () => {
  if (isTransitioning) return;
  currentIndex -= 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  if (isTransitioning) return;
  currentIndex += 1;
  updateCarousel();
});

// Clique no item principal leva ao link
updatedItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("act")) {
      window.open(item.dataset.link, "_blank");
    }
  });
});

// Atualiza a classe "act" para o item atual
function refreshActiveItem() {
  updatedItems.forEach((item, index) => {
    item.classList.remove("act");
    if (index === currentIndex) {
      item.classList.add("act");
    }
  });
}

// Chama a função sempre que houver uma transição
carousel.addEventListener("transitionstart", refreshActiveItem);
