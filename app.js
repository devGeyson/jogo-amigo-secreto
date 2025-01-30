let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);

        atualizarLista();
        input.value = "";
    } else {
        alert("Por favor, Digite um nome válido");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let sorteados = [...amigos];
    do {
        embaralhar(sorteados);
    } while (sorteados.some((p, i) => p === amigos[i]));

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    amigos.forEach((p, i) => {
        let li = document.createElement("li");
        li.textContent = `${p} -> ${sorteados[i]}`;
        resultadoLista.appendChild(li);
    });

    document.getElementById("botaoSortear").disabled = true;
}
