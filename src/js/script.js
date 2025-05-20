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
function iniciar() {
    let nome1, tipo1, safra1, quant1;
    let nome2, tipo2, safra2, quant2;
    let nome3, tipo3, safra3, quant3;
    let nome4, tipo4, safra4, quant4;
    let nome5, tipo5, safra5, quant5;
    let nome6, tipo6, safra6, quant6;
    let nome7, tipo7, safra7, quant7;
    let nome8, tipo8, safra8, quant8;
    let nome9, tipo9, safra9, quant9;
    let nome10, tipo10, safra10, quant10;

    let contador = 0;

    let nomeVinho;
    let tipoVinho;
    let safraVinho;

    let estoqueBaixoTotal = 0;
    let safraMaisAntiga = 9999;
    let nomeSafraMaisAntiga = "";

    let continuar = true;

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

        if (contador === 1) {
            nome1 = nomeVinho; tipo1 = tipoVinho; safra1 = safraVinho; quant1 = quantidade;
        } else if (contador === 2) {
            nome2 = nomeVinho; tipo2 = tipoVinho; safra2 = safraVinho; quant2 = quantidade;
        } else if (contador === 3) {
            nome3 = nomeVinho; tipo3 = tipoVinho; safra3 = safraVinho; quant3 = quantidade;
        } else if (contador === 4) {
            nome4 = nomeVinho; tipo4 = tipoVinho; safra4 = safraVinho; quant4 = quantidade;
        } else if (contador === 5) {
            nome5 = nomeVinho; tipo5 = tipoVinho; safra5 = safraVinho; quant5 = quantidade;
        } else if (contador === 6) {
            nome6 = nomeVinho; tipo6 = tipoVinho; safra6 = safraVinho; quant6 = quantidade;
        } else if (contador === 7) {
            nome7 = nomeVinho; tipo7 = tipoVinho; safra7 = safraVinho; quant7 = quantidade;
        } else if (contador === 8) {
            nome8 = nomeVinho; tipo8 = tipoVinho; safra8 = safraVinho; quant8 = quantidade;
        } else if (contador === 9) {
            nome9 = nomeVinho; tipo9 = tipoVinho; safra9 = safraVinho; quant9 = quantidade;
        } else if (contador === 10) {
            nome10 = nomeVinho; tipo10 = tipoVinho; safra10 = safraVinho; quant10 = quantidade;
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