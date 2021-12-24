var Datos;
$("#registrar").click(() => {
    Datos = {
        "Nombres": $("#nombre").val(),
        "Apellidos": $("#apellidos").val(),
        "Direccion": $("#direccion").val(),
        "Celular": $("#celular").val(),
        "Correo": $("#correo").val(),
        "Genero": $("#genero").val(),
        "Password": $("#password").val()
    };

    if (verficarCampos()) {
        mensaje_time();
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'INGRESA TODOS LOS CAMPOS'
          })
    }
});

$("#show_password").click( function(){
    var cambio = document.getElementById("password");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
		}
});

const verficarCampos = () => {
    let completos = true;
    for (const x in Datos) {
        if (Datos[x].trim() === "") {
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