document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Formulário enviado!');
});


// 1. Pega os elementos do HTML
const profilePicInput = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');

// 2. Adiciona um "ouvinte" que dispara quando o usuário escolhe um arquivo
profilePicInput.addEventListener('change', function(event) {
  
  // 3. Pega o primeiro arquivo que o usuário selecionou
  const file = event.target.files[0];

  // 4. Se realmente houver um arquivo...
  if (file) {
    // 5. Usa a API 'FileReader' para ler o arquivo do computador do usuário
    const reader = new FileReader();

    // 6. Quando o leitor terminar de carregar o arquivo...
    reader.onload = function(e) {
      // 7. Coloca o resultado no 'src' da imagem e a torna visível
      profilePreview.src = e.target.result;
      profilePreview.style.display = 'block'; // Mostra a imagem
    }

    // 8. Pede ao leitor para ler o arquivo como um link de dados (Data URL)
    reader.readAsDataURL(file);
  }
});

// Mensagem de confirmação de envio ---
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Formulário enviado!');
});