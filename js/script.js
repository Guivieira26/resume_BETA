const switchButton = document.getElementById("language-switch");

switchButton.addEventListener("click", () => {
    // Alterna a classe "active" para animar o botão
    switchButton.classList.toggle("active");

    // Aqui você pode adicionar a lógica para alterar o idioma da página
    if (switchButton.classList.contains("active")) {
        console.log("Idioma: Inglês");
        // Altere o conteúdo da página para inglês
    } else {
        console.log("Idioma: Português");
        // Altere o conteúdo da página para português
    }
});

const seta = document.querySelector('.seta-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    if (!seta.classList.contains('aparecer')) {
      seta.classList.add('aparecer'); // Adiciona a classe para mostrar com a animação
    }
  } else {
    seta.classList.remove('aparecer'); // Remove a classe quando volta ao topo
  }
});