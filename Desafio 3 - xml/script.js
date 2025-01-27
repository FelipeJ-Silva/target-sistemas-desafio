// Seleciona o botão e os campos de resultado
const processButton = document.getElementById('processButton');
const menorSpan = document.getElementById('menor');
const maiorSpan = document.getElementById('maior');
const diasAcimaMediaSpan = document.getElementById('diasAcimaMedia');

// Função para processar o faturamento
function processFaturamento(data) {
  // Filtra os dias com faturamento > 0
  const diasValidos = data.filter(dia => dia.valor > 0);

  // Calcula o menor e maior faturamento
  const menor = Math.min(...diasValidos.map(dia => dia.valor));
  const maior = Math.max(...diasValidos.map(dia => dia.valor));

  // Calcula a média
  const soma = diasValidos.reduce((total, dia) => total + dia.valor, 0);
  const media = soma / diasValidos.length;

  // Conta os dias acima da média
  const diasAcimaMedia = diasValidos.filter(dia => dia.valor > media).length;

  return { menor, maior, diasAcimaMedia };
}

// Função para converter XML em um array de objetos
function parseXMLtoJSON(xml) {
  const dias = Array.from(xml.getElementsByTagName('dia'));
  return dias.map(dia => {
    return {
      numero: parseInt(dia.getElementsByTagName('numero')[0].textContent),
      valor: parseFloat(dia.getElementsByTagName('valor')[0].textContent),
    };
  });
}

// Evento para processar os dados
processButton.addEventListener('click', async () => {
  try {
    // Lê o arquivo XML
    const response = await fetch('faturamento.xml');
    const text = await response.text();

    // Converte o XML em um documento manipulável
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');

    // Converte XML para um array de objetos
    const data = parseXMLtoJSON(xml);

    // Processa os dados
    const { menor, maior, diasAcimaMedia } = processFaturamento(data);

    // Exibe os resultados
    menorSpan.textContent = menor.toFixed(2);
    maiorSpan.textContent = maior.toFixed(2);
    diasAcimaMediaSpan.textContent = diasAcimaMedia;
  } catch (error) {
    console.error('Erro ao processar o faturamento:', error);
  }
});
