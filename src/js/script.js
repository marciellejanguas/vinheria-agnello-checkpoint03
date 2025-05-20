function mostrarDados(vinho) {
    console.log("DETALHES");
    console.log("Nome: " + vinho.nome);
    console.log("Tipo: " + vinho.tipo);
    console.log("Safra: " + vinho.safra);
    console.log("Quantidade: " + vinho.estoque);
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function adicionarVinho(nome, tipo, safra, estoque) {
    let vinho = {};
    vinho.nome = nome;
    vinho.tipo = tipo;
    vinho.safra = safra;
    vinho.estoque = estoque;
    vinhos.push(vinho);
}

const vinhos = []

function iniciar() {
    adicionarVinho("Gabriel", "rosé", "2020", 28);

    console.log("Lista completa de vinhos:");
    vinhos.forEach(vinho => mostrarDados(vinho));

    const baixos = vinhos.filter(vinho => estoqueBaixo(vinho.estoque));
    console.log("\n Estoque abaixo de 5:");
    baixos.forEach(v => console.log(`${v.nome} - Apenas ${v.estoque} unidades`));

    const totalEstoque = vinhos.reduce((soma, vinho) => soma + vinho.estoque, 0);
    console.log("\nEstoque total: " + totalEstoque + " garrafas");

    const nomesCaixaAlta = vinhos.map(vinho => vinho.nome.toUpperCase());
    alert(" Vinhos:\n" + nomesCaixaAlta.join("\n"));
}

iniciar();