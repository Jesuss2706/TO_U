function verificarCodigo() {
    const codigoCorrecto = "AMOR2026";
    const codigoIngresado = document.getElementById("codigoInput").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    if (codigoIngresado === "") {
        mensajeError.textContent = "Por favor, escribe un código 💌";
        return;
    }

    if (codigoIngresado === codigoCorrecto) {
        window.location.href = "sorpresa.html";
    } else {
        mensajeError.textContent = "Ese código no es el indicado... intenta nuevamente 💔";
    }
}

