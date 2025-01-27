// Seleciona os elementos
const inputField = document.getElementById('inputString');
const reverseButton = document.getElementById('reverseButton');
const resultSpan = document.getElementById('result');

// Função para inverter a string
function reverseString(str) {
  let reversed = ""; // Inicializa a string invertida como vazia
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Adiciona os caracteres na ordem inversa
  }
  return reversed;
}

// Adiciona evento ao botão
reverseButton.addEventListener('click', () => {
  const inputText = inputField.value; // Obtém o valor do campo de entrada
  const reversedText = reverseString(inputText); // Inverte a string
  resultSpan.textContent = reversedText; // Exibe o resultado
});
