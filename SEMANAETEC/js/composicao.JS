document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll("select");
    const allOptions = {}; // guarda todas as opções originais de cada select
    const selectedValues = {}; // guarda o valor atual escolhido em cada select
  
    // salva as opções originais de cada select
    selects.forEach((select, i) => {
      allOptions[i] = Array.from(select.options).map(opt => opt.value);
      selectedValues[i] = "???";
    });
  
    selects.forEach((select, currentIndex) => {
      select.addEventListener("change", (e) => {
        const newValue = e.target.value;
        const oldValue = selectedValues[currentIndex];
        selectedValues[currentIndex] = newValue;
  
        selects.forEach((otherSelect, otherIndex) => {
          if (otherIndex === currentIndex) return; // ignora o select atual
  
          const options = Array.from(otherSelect.options);
  
          // se o novo agente foi escolhido, remove das outras listas
          if (newValue !== "???") {
            options.forEach(opt => {
              if (opt.value === newValue) opt.remove();
            });
          }
  
          // se o antigo foi trocado, recoloca ele nas listas
          if (oldValue !== "???" && !options.find(opt => opt.value === oldValue)) {
            const allOriginal = allOptions[otherIndex];
            const originalIndex = allOriginal.indexOf(oldValue);
            if (originalIndex !== -1) {
              const newOption = document.createElement("option");
              newOption.value = oldValue;
              newOption.textContent = oldValue;
  
              // insere na posição original
              if (originalIndex >= otherSelect.options.length)
                otherSelect.appendChild(newOption);
              else
                otherSelect.insertBefore(newOption, otherSelect.options[originalIndex]);
            }
          }
        });
      });
    });
  });



//Banco de Dados em JS//

document.addEventListener('DOMContentLoaded', () => {
    const salvarBtn = document.getElementById('salvarBtn');
    const listarBtn = document.getElementById('listarBtn');
    const resultado = document.getElementById('resultado');
  
    salvarBtn.addEventListener('click', () => {
      const nomeComp = document.getElementById('nomeComp').value.trim();
      const duelista = document.getElementById('duelistaSelect').value;
      const iniciador = document.getElementById('iniciadorSelect').value;
      const flex = document.getElementById('flexSelect').value;
      const controlador = document.getElementById('controladorSelect').value;
      const sentinela = document.getElementById('sentinelaSelect').value;
  
      if (!nomeComp) {
      Swal.fire({
        title: "Não foi possível adicionar a composição",
        text: "Insira um nome para composição!",
        icon: "error",
        confirmButtonText: 'Ok',
        background: '#191940', // muda o fundo inteiro
        color: '#fff',         // muda a cor do texto
      });
        return;
      }
  
      const novaComposicao = {
        nome: nomeComp,
        duelista,
        iniciador,
        flex,
        controlador,
        sentinela,
        data: new Date().toLocaleString()
      };
  
      // Carrega composições existentes
      const composicoes = JSON.parse(localStorage.getItem('composicoesValorant')) || [];
  
      // Adiciona a nova
      composicoes.push(novaComposicao);
  
      // Salva no localStorage
      localStorage.setItem('composicoesValorant', JSON.stringify(composicoes));
  
      Swal.fire({
        title: "Composição salva.",
        text: "Sua composição foi salva com sucesso",
        icon: "info",
        background: '#191940',
        color: '#fff',        
      });
      document.getElementById('nomeComp').value = '';
    });
  
    listarBtn.addEventListener('click', () => {
      const composicoes = JSON.parse(localStorage.getItem('composicoesValorant')) || [];
  
      if (composicoes.length === 0) {
        resultado.innerHTML = '<p>Nenhuma composição salva.</p>';
        return;
      }
  
      resultado.innerHTML = '<h2>Composições Salvas:</h2>';
  
      composicoes.forEach((comp, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <strong>${comp.nome}</strong> (salva em ${comp.data})<br>
          - Duelista: ${comp.duelista}<br>
          - Iniciador: ${comp.iniciador}<br>
          - Flex: ${comp.flex}<br>
          - Controlador: ${comp.controlador}<br>
          - Sentinela: ${comp.sentinela}
          <hr>
        `;
        resultado.appendChild(div);
      });
    });
  });