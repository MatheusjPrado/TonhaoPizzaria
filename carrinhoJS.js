// Esta função é chamada pelo 'onclick' do dropdown no HTML.
function selectPayment(element) {
  // 1. Remove a classe 'selected' (CSS) de todos os itens
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  // 2. Adiciona a classe 'selected' apenas no item clicado
  element.classList.add('selected');
  
  // 3. Pega o botão do dropdown
  const dropdownButton = document.getElementById('dropdownMenuButton');
  // 4. Muda o texto do botão para o texto do item selecionado (ex: "Pix")
  dropdownButton.textContent = element.textContent;
}


// Criando objetos para representar as pizzas
const pizza1 = {
  preco: 49.99,
  sabor: "4 Queijos",
  tamanho: "Grande"
};

const pizza2 = {
  preco: 49.99,
  sabor: "Calabresa",
  tamanho: "Grande"
};

const pizzas = [pizza1, pizza2];

// Pegando os elementos do HTML onde vamos inserir as informações
const pizzasInfo = document.getElementById('pizzas-info');
const totalPrice = document.getElementById('total-price');

let total = 0;

// 'forEach' é um loop que passa por cada item do array 'pizzas'
pizzas.forEach(pizza => {
  // Cria um pedaço de HTML para cada pizza
  const pizzaHTML = `
    <h5 style="margin-bottom: 30px;">-Pizza ${pizza.tamanho} de ${pizza.sabor}</h5>
  `;
  // Adiciona o HTML na <div> 'pizzas-info'
  pizzasInfo.innerHTML += pizzaHTML;
  
  // Soma o preço da pizza ao total
  total += pizza.preco;
});

// Atualiza o texto do preço total no HTML
// 'toFixed(2)' formata o número para ter 2 casas decimais (ex: 49.99)
totalPrice.textContent = `Total: R$ ${total.toFixed(2)}`;
