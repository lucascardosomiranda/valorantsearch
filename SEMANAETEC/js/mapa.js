// Selecionando os elementos do DOM
const h2Mapa = document.querySelector("#nomeMapa"); 
const pMapa = document.querySelector("#descMapa");  
const slides = document.querySelectorAll("#carrosel [data-carousel-item]"); 
const botoes = document.querySelectorAll("#botoesMapas .btn"); 


const mapas = {
  Lotus: {
    titulo: "Lotus",
    descricao: "Lotus é um mapa futurista com corredores estreitos e pontos estratégicos para ataques surpresa.",
    imagens: ["lotus", "lotusbombb", "lotusmapa", "lotusbomba"]
  },
  Split: {
    titulo: "Split",
    descricao: "Split é conhecido pelos longos corredores e o famoso ponto B com torre central.",
    imagens: ["split", "splitbasect", "splitmapa", "splitbasetr"]
  },
  Fracture: {
    titulo: "Fracture",
    descricao: "Fracture possui dois lados completamente conectados por um sistema de catapultas aéreas.",
    imagens: ["fracture", "fracturebombb", "fracturemapa", "fracturebomba"]
  },
  Haven: {
    titulo: "Haven",
    descricao: "Haven é o único mapa com 3 sites de bomba, exigindo estratégias diferenciadas.",
    imagens: ["haven", "havenbombb", "havenmapa", "havenbomba"]
  },
  Ascent: {
    titulo: "Ascent",
    descricao: "Ascent possui uma arquitetura aberta e foco em controle de meio de mapa.",
    imagens: ["ascent", "ascentbombb", "ascentmapa", "ascentmeio"]
  },
  Breeze: {
    titulo: "Breeze",
    descricao: "Breeze é amplo e aberto, favorecendo combates de longa distância.",
    imagens: ["breeze", "breezebombb", "breezemapa", "breezebomba", "breezebombc"]
  },
  Bind: {
    titulo: "Bind",
    descricao: "Bind é famoso pelos teletransportes que conectam os dois lados do mapa rapidamente.",
    imagens: ["bind", "bindbombb", "bindmapa", "bindbomba"]
  },
  IceBox: {
    titulo: "IceBox",
    descricao: "IceBox tem muita verticalidade e foco em posições elevadas.",
    imagens: ["icebox", "iceboxbombb", "iceboxmapa", "iceboxbomba"]
  },
  Pearl: {
    titulo: "Pearl",
    descricao: "Pearl é um mapa subaquático, com corredores apertados e oportunidades de flanqueamento.",
    imagens: ["pearl", "pearlbombb", "pearlmapa", "pearlbomba"]
  }
};


function trocarMapa(nomeMapa) {
  const mapa = mapas[nomeMapa];
  if (!mapa) return;

 
  h2Mapa.textContent = mapa.titulo;
  pMapa.textContent = mapa.descricao;


  slides.forEach((slide, index) => {
    const img = slide.querySelector("img");
    if (img && mapa.imagens[index]) {
      img.src = `../imgs/mapas/${mapa.imagens[index]}.avif`;
      img.alt = `${mapa.titulo} ${index + 1}`;
    }

 
    const h5 = slide.querySelector("h5");
    if (h5) {
      const nomesSlides = ["Inicio", "Bomb B", "Mapa", "Bomb A"];
      h5.textContent = nomesSlides[index] === "Mapa" ? `${mapa.titulo} Mapa` : nomesSlides[index];
    }
  });

}


botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    trocarMapa(btn.id);
  });
});
trocarMapa("Lotus");
