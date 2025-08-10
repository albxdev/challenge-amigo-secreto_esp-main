let amigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombre);

    // 4. Mostrar en la lista HTML
    mostrarAmigos();

    // 5. Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
