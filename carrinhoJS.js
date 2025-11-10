function selectPayment(element) {
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.remove('selected');
  });
  element.classList.add('selected');
  const dropdownButton = document.getElementById('dropdownMenuButton');
  dropdownButton.textContent = element.textContent;
}

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
const pizzasInfo = document.getElementById('pizzas-info');
const totalPrice = document.getElementById('total-price');

let total = 0;

pizzas.forEach(pizza => {
  const pizzaHTML = `
    <h5 style="margin-bottom: 30px;">-Pizza ${pizza.tamanho} de ${pizza.sabor}</h5>
  `;
  pizzasInfo.innerHTML += pizzaHTML;
  total += pizza.preco;
});

totalPrice.textContent = `Total: R$ ${total.toFixed(2)}`;