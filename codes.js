function verificarCodigo() {
    const codigoIngresado = document.getElementById("codigoInput").value.trim().toUpperCase();
    const mensajeError = document.getElementById("mensajeError");

    if (codigoIngresado === "") {
        mensajeError.textContent = "Por favor, escribe un código 💌";
        return;
    }

    if (codigoIngresado === "NLS14ILY") {
        window.location.href = "nails.html";
    } else {
        mensajeError.textContent = "Ese código no es el indicado... intenta nuevamente 💔";
    }
}

