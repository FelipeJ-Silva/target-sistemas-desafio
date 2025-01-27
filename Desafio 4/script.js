// Faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

// Referência à tabela
const tabelaFaturamento = document.getElementById('tabela-faturamento');

// Gera as linhas da tabela dinamicamente
for (const [estado, valor] of Object.entries(faturamento)) {
    const percentual = (valor / faturamentoTotal) * 100;

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${estado}</td>
    <td>${percentual.toFixed(2)}</td>
    `;
    tabelaFaturamento.appendChild(row);
}