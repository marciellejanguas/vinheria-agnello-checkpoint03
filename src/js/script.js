function mostrarDados(nome, tipo, safra, quantidade, classificacao, alerta) {
    console.log("---------DETALHES----------");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    if (alerta) alert("Estoque baixo para: " + nome);
}

function validarEntrada(mensagem) {
    let entrada;
    do {
        entrada = prompt(mensagem);
    } while (entrada === null || entrada.trim() === "");
    return entrada;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    if (safra >= 2020) return "Jovem";
    if (safra >= 2015) return "Amadurecido";
    return "Antigo";
}

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
}

const vinhos = [{nome: "Gabriel", tipo: "Rosé", safra: "2022", estoque:"10"}]

function iniciar() {
  adicionarVinho("Gabriel", "rosé", 2020, 3);

  console.log("Lista completa de vinhos:");
  vinhos.forEach(v => mostrarDados(v));
}

iniciar();