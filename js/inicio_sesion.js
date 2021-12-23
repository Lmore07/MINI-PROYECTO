var Datos;
$("#login").click(function() {
    Datos = {
        "Email": $("#correo").val(),
        "Password": $("#password").val(),
        "Politica":comprobar_check()
    };
    if (verficarCampos()) {
        if(comprobar_check()=="true"){
            mensaje_time();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'SELECCIONA LA CASILLA PARA CONTINUAR'
              })
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'INGRESA DATOS VALIDOS'
          })
    }
});

function comprobar_check(){
    if($('#politica').prop('checked')) {
        return "true";
    }else{
        return "false";
    }
}

function verficarCampos(){
    let completos = true;
    for (const x in Datos) {
        if (Datos[x].trim() == "") {
            completos = false;
            break;
        }
    }
    return completos;
};

function mensaje_time(){
    let timerInterval
    Swal.fire({
    title: 'REDIRECCIONANDO',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
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