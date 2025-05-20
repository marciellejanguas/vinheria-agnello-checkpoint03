function mostrarDados(vinho) {
    console.log("DETALHES");
    console.log("Nome: " + vinho.nome);
    console.log("Tipo: " + vinho.tipo);
    console.log("Safra: " + vinho.safra);
    console.log("Quantidade: " + vinho.estoque);
}

//função para verificar a quantidade de vinhos em estoque
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

//funções reutilizáveis
function adicionarVinho(nome, tipo, safra, estoque) {
    let vinho = {};
    vinho.nome = nome;
    vinho.tipo = tipo;
    vinho.safra = safra;
    vinho.estoque = estoque;
    vinhos.push(vinho);
}

function listarVinhos() {
    console.log("Lista completa de vinhos:");
    vinhos.forEach(vinho => mostrarDados(vinho));
}

function verificaEstoqueBaixo() {
    const baixos = vinhos.filter(vinho => estoqueBaixo(vinho.estoque));
    console.log("\n Estoque abaixo de 5:");
    baixos.forEach(v => console.log(`${v.nome} - Apenas ${v.estoque} unidades`));
}

function verificaTotalEstoque() {
    const totalEstoque = vinhos.reduce((soma, vinho) => soma + vinho.estoque, 0);
    console.log("\nEstoque total: " + totalEstoque + " garrafas");
}

function nomesCaixaAlta() {
    const nomesCaixaAlta = vinhos.map(vinho => vinho.nome.toUpperCase());
    alert(" Vinhos:\n" + nomesCaixaAlta.join("\n"));
}

// array de vinhos cadastrados 
const vinhos = [
    { nome: "Matheus", tipo: "rosé", safra: 2020, estoque: 28 },
    { nome: "Cabernet", tipo: "tinto", safra: 2018, estoque: 3 },
    { nome: "Chardonnay", tipo: "branco", safra: 2019, estoque: 10 },
    { nome: "Malbec", tipo: "tinto", safra: 2017, estoque: 2 },
    { nome: "Pinot Noir", tipo: "tinto", safra: 2021, estoque: 15 }
]

function iniciar() {
    // simula cadastro de vinho
    adicionarVinho("Matheus", "rosé", "2020", 28);

    //mostrar lista dos vinhos
    listarVinhos()

    // verifica estoque
    verificaEstoqueBaixo()

    // mostrar total em estoque
    verificaTotalEstoque()

    // mostrar lista de vinhos em caixa alta via ALERT
    nomesCaixaAlta()
}

iniciar();