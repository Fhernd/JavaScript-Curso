function validarDatosFormularioRegistroEvento(datosFormulario){
    const resultado = {
        nombre: validarNombre(datosFormulario.nombre),
        email: validarEmail(datosFormulario.email),
        telefonoMovil: validarTelefonoMovil(datosFormulario.telefonoMovil),
        edad: this.edad.value,
        profesion: this.profesion.value,
        experiencia: this.experiencia.value,
        expectativas: this.expectativas.value
    };
}

function validarNombre(nombre){
    return nombre.length > 3;
}

function validarEmail(email){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(email);
}

function validarTelefonoMovil(telefonoMovil){
    const regexTelefonoMovil = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return regexTelefonoMovil.test(telefonoMovil);
}
