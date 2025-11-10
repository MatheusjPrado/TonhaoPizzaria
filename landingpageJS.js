// Função para mudar a cor de fundo ao passar o mouse
const mudarCorFundo = (elemento) => {
    elemento.style.backgroundColor = 'rgba(255, 165, 0, 0.3)'; // Cor laranja suave
  }
  
  // Função para restaurar a cor de fundo ao retirar o mouse
  const restaurarCorFundo = function(elemento) {
    elemento.style.backgroundColor = ''; // Remove a cor de fundo
  }