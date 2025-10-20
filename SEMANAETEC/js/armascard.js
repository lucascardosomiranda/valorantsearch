function mostrarArmas(tipo) {
    // pega todos os cards
    const cards = document.querySelectorAll(".card");

    // esconde tudo
    cards.forEach(card => {
      card.style.display = "none";
    });

    // mostra apenas o tipo clicado
    if (tipo === "pistolas") {
      mostrarIntervalo(0, 5); // classic - sherif
    } else if (tipo === "metralhadoras") {
      mostrarIntervalo(5, 9); // stinger - odin
    } else if (tipo === "espingardas") {
      mostrarIntervalo(9, 11); // bucky - judge
    } else if (tipo === "fuzis") {
      mostrarIntervalo(11, 15); // bulldog - vandal
    } else if (tipo === "fuzisPrecisao") {
      mostrarIntervalo(15, 18); // marshal - operator
    }
  }

  // função auxiliar para exibir intervalo de cards
  function mostrarIntervalo(inicio, fim) {
    const cards = document.querySelectorAll(".card");
    const total = cards.length;

    for (let i = inicio; i < fim && i < total; i++) {
      const card = cards[i];
      card.style.display = "flex";
    }

  }
  
  document.getElementById("p").addEventListener("click", () => mostrarArmas("pistolas"));
  document.getElementById("m").addEventListener("click", () => mostrarArmas("metralhadoras"));
  document.getElementById("e").addEventListener("click", () => mostrarArmas("espingardas"));
  document.getElementById("f").addEventListener("click", () => mostrarArmas("fuzis"));
  document.getElementById("fp").addEventListener("click", () => mostrarArmas("fuzisPrecisao"));
