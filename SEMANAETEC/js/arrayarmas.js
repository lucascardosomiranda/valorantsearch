const armasValorant = [
    {
      nome: "Classic",
      imagem: "../imgs/imgarmas/classic.avif",
      dano: "corpo 26 / cabeça 78",
      recoil: "Baixo",
      speedfire: "3.5 balas/s",
      tempoMirar: "sem mira"
    },
    {
      nome: "Shorty",
      imagem: "../imgs/imgarmas/shorty.avif",
      dano: "corpo 34 / cabeça 102",
      recoil: "Baixo",
      speedfire: "3 balas/s",
      tempoMirar: "sem mira"
    },
    {
      nome: "Frenzy",
      imagem: "../imgs/imgarmas/frenzy.avif",
      dano: "corpo 26 / cabeça 78",
      recoil: "Médio",
      speedfire: "10 balas/s",
      tempoMirar: "sem mira"
    },
    {
      nome: "Ghost",
      imagem: "../imgs/imgarmas/ghost.avif",
      dano: "corpo 105 / cabeça 315",
      recoil: "Baixo",
      speedfire: "6.75 balas/s",
      tempoMirar: "0.25s"
    },
    {
      nome: "Sheriff",
      imagem: "../imgs/imgarmas/sherif.avif",
      dano: "corpo 160 / cabeça 320",
      recoil: "Alto",
      speedfire: "1.1 balas/s",
      tempoMirar: "0.4s"
    },
    {
      nome: "Stinger",
      imagem: "../imgs/imgarmas/stinger.avif",
      dano: "corpo 27 / cabeça 81",
      recoil: "Médio",
      speedfire: "16 balas/s",
      tempoMirar: "0.3s"
    },
    {
      nome: "Spectre",
      imagem: "../imgs/imgarmas/spectre.avif",
      dano: "corpo 160 / cabeça 320",
      recoil: "Baixo",
      speedfire: "11 balas/s",
      tempoMirar: "0.3s"
    },
    {
      nome: "Ares",
      imagem: "../imgs/imgarmas/ares.avif",
      dano: "corpo 195 / cabeça 390",
      recoil: "Médio",
      speedfire: "13 balas/s",
      tempoMirar: "0.4s"
    },
    {
      nome: "Odin",
      imagem: "../imgs/imgarmas/odin.avif",
      dano: "corpo 255 / cabeça 510",
      recoil: "Alto",
      speedfire: "12 balas/s",
      tempoMirar: "0.5s"
    },
    {
      nome: "Bucky",
      imagem: "../imgs/imgarmas/bucky.avif",
      dano: "corpo 160 / cabeça 320",
      recoil: "Baixo",
      speedfire: "9.25 balas/s",
      tempoMirar: "0.25s"
    },
    {
      nome: "Judge",
      imagem: "../imgs/imgarmas/judge.avif",
      dano: "corpo 195 / cabeça 390",
      recoil: "Médio",
      speedfire: "13 balas/s",
      tempoMirar: "0.4s"
    },
    {
      nome: "Bulldog",
      imagem: "../imgs/imgarmas/bulldog.avif",
      dano: "corpo 116 / cabeça 348",
      recoil: "Baixo",
      speedfire: "9.75 balas/s",
      tempoMirar: "0.35s"
    },
    {
      nome: "Guardian",
      imagem: "../imgs/imgarmas/guardian.avif",
      dano: "corpo 195 / cabeça 585",
      recoil: "Médio",
      speedfire: "6.75 balas/s",
      tempoMirar: "0.4s"
    },
    {
      nome: "Phantom",
      imagem: "../imgs/imgarmas/phantom.avif",
      dano: "corpo 156 / cabeça 468",
      recoil: "Baixo",
      speedfire: "11 balas/s",
      tempoMirar: "0.3s"
    },
    {
      nome: "Vandal",
      imagem: "../imgs/imgarmas/vandal.avif",
      dano: "corpo 160 / cabeça 480",
      recoil: "Baixo",
      speedfire: "9.75 balas/s",
      tempoMirar: "0.3s"
    },
    {
      nome: "Marshal",
      imagem: "../imgs/imgarmas/marshla.avif",
      dano: "corpo 202 / cabeça 404",
      recoil: "Médio",
      speedfire: "1.5 balas/s",
      tempoMirar: "0.5s"
    },
    {
      nome: "Operator",
      imagem: "../imgs/imgarmas/operator.avif",
      dano: "corpo 255 / cabeça 510",
      recoil: "Alto",
      speedfire: "0.5 balas/s",
      tempoMirar: "0.7s"
    },
    {
      nome: "Outlaw",
      imagem: "../imgs/imgarmas/outlaw.avif",
      dano: "corpo 202 / cabeça 404",
      recoil: "Médio",
      speedfire: "1.5 balas/s",
      tempoMirar: "0.5s"
    }
  ];
//   array das armas 
  
      let cards = document.querySelectorAll(".card")
      cards.forEach(card => {
        card.addEventListener("click", () => {
          let nomearma = card.querySelector("h2").textContent
          console.log(nomearma)
          cards.forEach(c => c.style.backgroundColor = '');
          card.style.backgroundColor = card.style.backgroundColor === 'rgba(0, 255, 255, 0.30)' ? '' : 'rgba(0, 255, 255, 0.30)';
          let armaSelecionada = armasValorant.find(a => a.nome === nomearma);
  
          if (armaSelecionada) {
            document.querySelector(".tab .imagem img").src = armaSelecionada.imagem;
            document.querySelector(".dano").textContent = "Dano: " + armaSelecionada.dano;
            document.querySelector(".recoil").textContent = "Recoil: " + armaSelecionada.recoil;
            document.querySelector(".speedfire").textContent = "Speedfire: " + armaSelecionada.speedfire;
            document.querySelector(".tempoMirar").textContent = "Tempo para Mirar: " + armaSelecionada.tempoMirar;
  
          }
        })
      })