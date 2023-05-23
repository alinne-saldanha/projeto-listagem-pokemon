const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoDeTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoDeTrocaDeTema.setAttribute("src", "src/imagens/sun.png");
  } else {
    imagemBotaoDeTrocaDeTema.setAttribute("src", "src/imagens/moon.png");
  }
});
