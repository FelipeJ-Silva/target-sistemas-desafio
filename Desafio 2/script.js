function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero)) {
      document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
      return;
    }

    let a = 0, b = 1, fibonacci = [a, b];

    while (b < numero) {
      const proximo = a + b;
      fibonacci.push(proximo);
      a = b;
      b = proximo;
    }

    if (fibonacci.includes(numero)) {
      document.getElementById("resultado").innerText = `O número ${numero} pertence à sequência de Fibonacci!`;
    } else {
      document.getElementById("resultado").innerText = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
  }