const container = document.getElementById("hearts-container");

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💅";

    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    const size = Math.random() * 20 + 15;
    corazon.style.fontSize = size + "px";

    // Duración aleatoria
    const duration = Math.random() * 2 + 3;
    corazon.style.animationDuration = duration + "s";

    container.appendChild(corazon);

    // Eliminar después de animarse
    setTimeout(() => {
        corazon.remove();
    }, duration * 1000);
}

// Crear corazones cada cierto tiempo
setInterval(crearCorazon, 500);
