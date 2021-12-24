var pregs = {
    "1": {
        "Pregunta": "¿Cuantos huesos tiene el cuerpo humano?",
        "Respuesta": "206"
    },
    "2": {
        "Pregunta": "¿Cuál es el río más largo del mundo?",
        "Respuesta": "El Amazonas/Rio Amazonas/Amazonas/El rio amazonas"
    },
    "3": {
        "Pregunta": "¿Cuál es el país con más habitantes del mundo?",
        "Respuesta": "China"
    },
    "4": {
        "Pregunta": "¿Dónde está Transilvania?",
        "Respuesta": "En Rumanía/Rumania"
    },
    "5": {
        "Pregunta": "¿En qué año cayó el muro de Berlín?",
        "Respuesta": "En 1989/1989/mil novecientos ochenta y nueve"
    },
    "6": {
        "Pregunta": "¿Cuál es el océano más grande del mundo?",
        "Respuesta": "El océano Pacífico/Pacifico/el pacifico/oceano pacifico"
    },
    "7": {
        "Pregunta": "¿Cuántos lados tiene un heptágono?",
        "Respuesta": "Siete lados/7 lados/7/siete"
    },
    "8": {
        "Pregunta": "¿Cuál es el animal que más muertes provoca cada año?",
        "Respuesta": "El mosquito/Mosquito/mosquitos/el mosco/mosco/moscos"
    },
    "9": {
        "Pregunta": "¿Cuál es el planeta más grande del Sistema Solar?",
        "Respuesta": "Júpiter"
    },
    "10": {
        "Pregunta": "¿Qué religión tiene la Torá como su libro sagrado?",
        "Respuesta": "El judaismo/judaismo/hebraísmo/sionismo"
    },
    "11": {
        "Pregunta": "¿Los tiburones son peces o mamíferos?",
        "Respuesta": "Son peces/peces"
    },
    "12": {
        "Pregunta": "¿Cuántas estrellas hay en la bandera estadounidense?",
        "Respuesta": "50/cincuenta/cincuenta estrellas/50 estrellas"
    },
    "13": {
        "Pregunta": "¿Cuáles son los únicos mamíferos que pueden volar?",
        "Respuesta": "murcielagos/los murcielagos/el murcielago/murcielago"
    },
    "14": {
        "Pregunta": "¿Quién ganó el mundial de fútbol de 2010?",
        "Respuesta": "España/la seleccion de españa/seleccion de españa/seleccion española/la seleccion española/espñoles/los españoles"
    },
    "15": {
        "Pregunta": "¿Cuál es el futbolista con más balones de oro?",
        "Respuesta": "Lionel Messi/messi/messias/d10s/el messias/el enano/Lionel Andres Messi Cuccitini/Lionel Andres Messi"
    },
    "16": {
        "Pregunta": "¿Cuántas notas musicales existen?",
        "Respuesta": "Doce/12"
    },
    "17": {
        "Pregunta": "¿Cuándo se inventó la imprenta?",
        "Respuesta": "En 1440/1440/mil cuatrocientos cuarenta"
    },
    "18": {
        "Pregunta": "¿Cuál es el mineral más duro del planeta?",
        "Respuesta": "El diamante/diamante/los diamantes/diamantes"
    },
    "19": {
        "Pregunta": "¿Cuántos corazones tiene un gusano de tierra?",
        "Respuesta": "5/cinco"
    },
    "20": {
        "Pregunta": "¿Cuál fue la primera película de Disney?",
        "Respuesta": "Blancanieves y los siete enanitos/Blancanieves/Blancanieves y los siete enanos"
    },
    "21": {
        "Pregunta": "¿Cuál es el planeta más alejado del Sol?",
        "Respuesta": "Neptuno"
    },
    "22": {
        "Pregunta": "¿Qué expresidente sudafricano estuvo encarcelado durante 27 años?",
        "Respuesta": "Mandela/Nelson Mandela"
    },
    "23": {
        "Pregunta": "¿Qué gas liberan las plantas al hacer la fotosíntesis?",
        "Respuesta": "Oxígeno/O"
    },
    "24": {
        "Pregunta": "¿Cuántos dientes tenemos?",
        "Respuesta": "32 dientes/32/treinta y 2 dientes/treinta y 2"
    },
    "25": {
        "Pregunta": "¿En qué país nació Adolf Hitler?",
        "Respuesta": "En Austria/Austria"
    },
    "26": {
        "Pregunta": "¿Cuánto duró “La Guerra de los Cien Años”?",
        "Respuesta": "116 años/116/ciento dieciseis años/ciento dieciseis"
    },
    "27": {
        "Pregunta": "¿Qué medicamento mata a los virus?",
        "Respuesta": "Ninguno/nada/ni uno/no hay"
    },
    "28": {
        "Pregunta": "¿Cuántos anillos hay en la bandera olímpica?",
        "Respuesta": "5/cinco"
    },
    "29": {
        "Pregunta": "En la mitología griega, ¿quién mató a Aquiles?",
        "Respuesta": "Paris"
    },
    "30": {
        "Pregunta": "De acuerdo a la Biblia, ¿cuántos años vivió Matusalén?",
        "Respuesta": "969 años/novecientos sesenta y nueve/novecientos sesenta y nueve años/969"
    }
};
var repetidas = null;
var num_p;
var myObj = new Object;
var contador = 0;
var puntaje=0;

$("#btn1").click(() => preguntar("btn1"));
$("#btn2").click(() => preguntar("btn2"));
$("#btn3").click(() => preguntar("btn3"));
$("#btn4").click(() => preguntar("btn4"));
$("#btn5").click(() => preguntar("btn5"));
$("#btn6").click(() => preguntar("btn6"));
$("#btn7").click(() => preguntar("btn7"));
$("#btn8").click(() => preguntar("btn8"));
$("#btn9").click(() => preguntar("btn9"));
$("#btn10").click(() => preguntar("btn10"));
$("#btn11").click(() => preguntar("btn11"));
$("#btn12").click(() => preguntar("btn12"));

function preguntar(btn) {
    if (contador != 12) {
        var preg = generar_preg_aleatoria();
        Swal
            .fire({
                title: preg.Pregunta,
                input: "text",
                showCancelButton: false,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                inputValidator: rpta => {
                    // Si el valor es válido, debes regresar undefined. Si no, una cadena
                    if (!rpta) {
                        return "Por favor responde la pregunta";
                    } else {
                        return undefined;
                    }
                }
            })
            .then(resultado => {
                if (resultado.value) {
                    let rpta = resultado.value.toString();
                    var opciones = preg.Respuesta.toString().split('/');
                    $('#' + btn).removeClass('btn btn-outline-danger');
                    var bo = false;
                    for (const x in opciones) {
                        if (rpta.trimEnd().trimStart().localeCompare(opciones[x].toString(), undefined, { sensitivity: 'base' }) == 0) {
                            bo = true;
                            break;
                        }
                    }
                    if (bo) {
                        $('#' + btn).addClass('btn btn-success');
                        puntaje++;
                        mensaje_bien();
                    } else {
                        $('#' + btn).addClass('btn btn-danger');
                        mensaje_incorrecto(opciones[0]);
                    }
                    $(document).ready(function () {
                        $("#" + btn).prop('disabled', true);
                    });

                    contador++;
                    if(contador==12){
                        Swal.fire({
                            title: 'TU PUNTUACION ES: '+ calc_puntaje()+' PUNTOS',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            backdrop: `
                              rgba(0,0,123,0.4)
                              url("/images/nyan-cat.gif")
                              left top
                              no-repeat
                            `
                          })
                    }
                } else {
                    delete repetidas[num_p.toString()];
                }
            });
    }
}

if(contador==12){
    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}

function ver_repetidas(preg) {
    for (const x in repetidas) {
        if (repetidas[x] == preg) {
            return true;
        }
    }
    return false;
}

function calc_puntaje(){
    var total= Math.round((puntaje*100)/12,2);
    return total.toString();
}

function generar_preg_aleatoria() {
    while (true) {
        var rnd = Math.ceil(Math.random() * (30 - 0) + 0);
        if (repetidas == null) {
            num_p = rnd.toString();
            var num = rnd.toString();
            myObj[num] = pregs[rnd];
            repetidas = Object.assign(myObj, repetidas);
            break;
        }
        else if (ver_repetidas(pregs[rnd]) == false) {
            num_p = rnd.toString();
            var num = rnd.toString();
            myObj[num] = pregs[rnd];
            repetidas = Object.assign(repetidas, myObj);
            break;
        }
    }
    return pregs[rnd];
}

function mensaje_bien() {
    let timerInterval
    Swal.fire({
        title: 'Excelente has acertado',
        timer: 2000,
        icon: 'success',
        showConfirmButton:false,
        timerProgressBar: true,
        didOpen: () => {
            //Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

function mensaje_incorrecto(correcta) {
    let timerInterval
    Swal.fire({
        title: 'Opps respuesta incorrecta',
        html: 'La respuesta correcta es: '+correcta+'',
        timer: 2000,
        icon: 'error',
        showConfirmButton:false,
        timerProgressBar: true,
        didOpen: () => {
            //Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}