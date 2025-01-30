let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome !== ""){
        amigos.push(nome);
        
        atualizarLista();
        input.value = "";
    }else{
        alert("Por favor, Digite um nome válido");
    }
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome =>{
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    })
}