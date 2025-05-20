function mostrarDados(nome, tipo, safra, quantidade, alerta) {
    console.log("DETALHES");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    if (alerta) alert("Estoque baixo para: " + nome);
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
}

const vinhos = [{nome: "", tipo: "", safra: "", estoque:""}]

function iniciar() {
  adicionarVinho("Gabriel", "rosé", "2020", "2");

  console.log("Lista completa de vinhos:");
  vinhos.forEach(v => mostrarDados(v));
  
  const baixos = vinhos.filter(v => estoqueBaixo(v.estoque));
  console.log("\n Estoque abaixo de 5:");
  baixos.forEach(v => console.log(`${v.nome} - Apenas ${v.estoque} unidades`));

  const totalEstoque = vinhos.reduce((soma, v) => soma + v.estoque, 0);
  console.log("\nEstoque total: " + totalEstoque + " garrafas");

  const nomesCaixaAlta = vinhos.map(v => v.nome.toUpperCase());
  alert(" Vinhos:\n" + nomesCaixaAlta.join("\n"));
}

iniciar();