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
