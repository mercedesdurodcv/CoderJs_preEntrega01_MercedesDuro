

/* Juego de adivinanza numérica para el usuario */

function adivinanza() {
    const numeroGanador = 7;
    let chances = 3;
    let correcto = false;

    while (chances > 0 && !correcto) {
        const pregunta = parseInt(prompt("Estoy pensando un número del uno al diez. Te doy tres intentos para que adivines. ¿Qué número estoy pensando?"))

        if (pregunta === numeroGanador) {
            alert("Muy bien, adivinaste!");
            correcto = true;
        } else if (pregunta < numeroGanador) {
            chances--;
            if (chances > 0) {
                alert("Uy, te equivocaste! Probá de nuevo. Te quedan" + " " + chances + " " + "oportunidades.") 
            } else {
                alert("Perdiste! El número era:" + " " + numeroGanador);
            }
              

            } else if (pregunta > numeroGanador) {
                chances--;
                if (chances > 0) {
                alert("Ups, no es ese número. Te quedan" + " " + chances + " " + "oportunidades.");
                } else {
                alert("Perdiste! El número era:" + " " + numeroGanador); 
                }
            }
        }
}
        
 
adivinanza()





