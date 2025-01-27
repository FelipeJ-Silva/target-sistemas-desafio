function calcularSoma() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k++;
        soma += k;
    }

    document.getElementById("resultado").innerText = `O valor final da soma é: ${soma}`;
}