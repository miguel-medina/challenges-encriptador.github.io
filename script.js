



function mostrarMensajeEncriptado() {
    var contenidoTextarea = document.getElementById("miTexto").value;
    console.log(contenidoTextarea);

    var contenidoMensajeEncriptado = document.getElementById("mensajeDesencriptado");

    var divNingunMensaje = document.getElementById("ningunMensaje");

    var divMensajeEncritado = document.getElementById("encriptadoMensaje");

    var flexMensajeEncriptado = document.getElementById("mensajeencriptado");

    if (contenidoTextarea.trim() != "" || contenidoTextarea.trim() === "") {
        if (contenidoTextarea.trim() === "") {
            divNingunMensaje.style.display = "block";
            encriptadoMensaje.style.display = "none"
            flexMensajeEncriptado.style.justifyContent = "center";
        } else {
            divNingunMensaje.style.display = "none";
            encriptadoMensaje.style.display = "block"
            flexMensajeEncriptado.style.justifyContent = "start";
            contenidoMensajeEncriptado.value = encriptarMensaje(contenidoTextarea);
            contenidoMensajeEncriptado.readOnly = true;
        }
    }
}

////////////////////////////////////////////////////////

function mostrarMensajeDesencriptado() {
    var contenidoTextarea = document.getElementById("miTexto").value;
    console.log(contenidoTextarea);

    var contenidoMensajeEncriptado = document.getElementById("mensajeDesencriptado");

    var divNingunMensaje = document.getElementById("ningunMensaje");

    var divMensajeEncritado = document.getElementById("encriptadoMensaje");

    var flexMensajeEncriptado = document.getElementById("mensajeencriptado");

    if (contenidoTextarea.trim() != "" || contenidoTextarea.trim() === "") {
        if (contenidoTextarea.trim() === "") {
            divNingunMensaje.style.display = "block";
            encriptadoMensaje.style.display = "none"
            flexMensajeEncriptado.style.justifyContent = "center";
        } else {
            divNingunMensaje.style.display = "none";
            encriptadoMensaje.style.display = "block"
            flexMensajeEncriptado.style.justifyContent = "start";
            contenidoMensajeEncriptado.value = desencriptarMensaje(contenidoTextarea);
            contenidoMensajeEncriptado.readOnly = true;
        }
    }
}

////////////////////////////////////////////////////////

function encriptarMensaje(mensaje) {
    let vocalesRemplazar = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let mensajeEncriptado = mensaje.replace(/[aeiou]/g, letra => vocalesRemplazar[letra]);

    console.log(mensajeEncriptado);
    return mensajeEncriptado.toString();
}

////////////////////////////////////////////////////////

function desencriptarMensaje(mensaje) {
    let letrasRemplazar = {
        "ai": 'a',
        "enter": 'e',
        "imes": 'i',
        "ober": 'o',
        "ufat": 'u'
    };

    // Eliminamos \b de la expresión regular
    let expresionRegular = new RegExp(Object.keys(letrasRemplazar).join("|"), "g");

    let nuevaCadena = mensaje.replace(expresionRegular, palabra => letrasRemplazar[palabra]);

    return nuevaCadena.toString()
}

//////////////////////////////////////////////////////////////////

function copiarTexto() {
    // Obtener el elemento textarea
    let textarea = document.getElementById("mensajeDesencriptado");

    // Seleccionar el texto del textarea
    textarea.select();

    try {
        // Copiar el texto seleccionado al portapapeles
        document.execCommand("copy");
    } catch (err) {
    }

    // Desseleccionar el textarea para evitar que el texto siga resaltado
    textarea.selectionEnd = textarea.selectionStart;
}