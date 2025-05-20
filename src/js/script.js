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

const vinhos = [{nome: "Gabriel", tipo: "Rosé", safra: "2022", estoque:10"}]

    while (continuar && contador < 10) {
        contador++;

        nomeVinho = validarEntrada("Digite o nome do vinho:");
        tipoVinho = validarEntrada("Digite o tipo do vinho:");
        safraVinho = parseInt(validarEntrada("Digite o ano da safra:"));
        let quantidade = parseInt(validarEntrada("Digite a quantidade em estoque:"));

        let classificacao = classificarVinho(safraVinho);
        let alerta = estoqueBaixo(quantidade);

        mostrarDados(nomeVinho, tipoVinho, safraVinho, quantidade, classificacao, alerta);

        if (alerta) estoqueBaixoTotal++;
        if (safraVinho < safraMaisAntiga) {
            safraMaisAntiga = safraVinho;
            nomeSafraMaisAntiga = nomeVinho;
        }

        continuar = confirm("Deseja cadastrar outro vinho?");
    }

    alert("Cadastro finalizado!\n" +
        "Total de vinhos cadastrados: " + contador + "\n" +
        "Vinhos com estoque baixo: " + estoqueBaixoTotal + "\n" +
        "Safra mais antiga: " + safraMaisAntiga + " (" + nomeSafraMaisAntiga + ")" + "\n" +
        "Veja as informações no console.");
}

iniciar();