// Função para carregar o arquivo JSON
async function carregarFaturamento() {
    const resposta = await fetch('faturamento.json'); // Caminho do arquivo JSON
    const dados = await resposta.json();  // Converte o conteúdo JSON em objeto JavaScript
    return dados;
  }
  
  // Função para analisar os dados de faturamento
  function analisarFaturamento(faturamento) {
    const faturamentoDiario = faturamento.faturamento_diario;
    
    // Filtrar dias com faturamento (ignorando 0 e null)
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    
    // Calcular o menor valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento);
    
    // Calcular o maior valor de faturamento
    const maiorFaturamento = Math.max(...diasComFaturamento);
    
    // Calcular a média mensal (somente dias com faturamento)
    const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    
    // Contar os dias com faturamento superior à média mensal
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;
    
    return {
      menorFaturamento,
      maiorFaturamento,
      mediaMensal,
      diasAcimaDaMedia
    };
  }
  
  // Função principal que chama carregar e analisar
  async function executar() {
    const faturamento = await carregarFaturamento(); // Carrega os dados do arquivo JSON
    const resultados = analisarFaturamento(faturamento); // Analisa os dados
    
    console.log("Menor faturamento:", resultados.menorFaturamento);
    console.log("Maior faturamento:", resultados.maiorFaturamento);
    console.log("Média mensal:", resultados.mediaMensal.toFixed(2));
    console.log("Número de dias com faturamento superior à média:", resultados.diasAcimaDaMedia);
  }
  
  // Executa o código
  executar();