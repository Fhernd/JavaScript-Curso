class RegistroEvento{
    constructor() {
        this.frmRegistroEvento = document.querySelector('#frmRegistroEvento');
        this.nombre = document.querySelector('#nombre');
        this.email = document.querySelector('#email');
        this.telefonoMovil = document.querySelector('#telefonoMovil');
        this.edad = document.querySelector('#edad');
        this.profesion = document.querySelector('#profesion');
        this.experiencia = document.querySelector('#experiencia');
        this.expectativas = document.querySelector('#expectativas');
        this.registrarEvento = document.querySelector('#registrarEvento');
        this.indicadorCarga = document.querySelector('#indicadorCarga');

        this.frmRegistroEvento.addEventListener('submit', evento => {
            this.subirFormulario(evento);
        });
    }

    subirFormulario(evento){
        event.preventDefault();

        const datosFormulario = this.obtenerDatosFormulario();
        const resultadoValidacion = validarDatosFormularioRegistroEvento(datosFormulario);

        if (resultadoValidacion.esValido){
            this.removerErroresCampos();
            this.prepararEnvioDatos(datosFormulario);
        } else {
            this.removerErroresCampos();
            this.resaltarCamposConErrores(resultadoValidacion.resultado);
        }
    }

    obtenerDatosFormulario() {
        return {
            nombre: this.nombre.value,
            email: this.email.value,
            telefonoMovil: this.telefonoMovil.value,
            edad: this.edad.value,
            profesion: this.profesion.value,
            experiencia: parseInt(document.querySelector('input[name="experiencia"]:checked').value),
            expectativas: this.expectativas.value
        };
    }

    removerErroresCampos() {
        this.nombre.parentElement.classList.remove('has-error');
        this.email.parentElement.classList.remove('has-error');
        this.telefonoMovil.parentElement.classList.remove('has-error');
        this.edad.parentElement.classList.remove('has-error');
        this.profesion.parentElement.classList.remove('has-error');
        this.experiencia.parentElement.classList.remove('has-error');
    }

    resaltarCamposConErrores(resultado) {
        if(!resultado.nombre){
            this.nombre.parentElement.classList.add('has-error');
        }
        if(!resultado.email){
            this.email.parentElement.classList.add('has-error');
        }
        if(!resultado.telefonoMovil){
            this.telefonoMovil.parentElement.classList.add('has-error');
        }
        if(!resultado.edad){
            this.edad.parentElement.classList.add('has-error');
        }
        if(!resultado.profesion){
            this.profesion.parentElement.classList.add('has-error');
        }
        if(!resultado.experiencia){
            this.experiencia.parentElement.classList.add('has-error');
        }
    }

    prepararEnvioDatos(datosFormulario){
        this.registrarEvento.classList.add('hidden');
        this.indicadorCarga.classList.remove('hidden');

        solicitudApi('registro', datosFormulario, 'POST')
        .then(respuesta => {
            this.registrarEvento.classList.remove('hidden');
            this.indicadorCarga.classList.add('hidden');
            this.removerDatosFormulario();
            alertify.alert(respuesta.mensaje);
        })
        .catch(() => {
            this.registrarEvento.classList.remove('hidden');
            this.indicadorCarga.classList.add('hidden');
        });
    }

    removerDatosFormulario(){
        this.nombre.value = '';
        this.email.value = '';
        this.telefonoMovil.value = '';
        this.edad.value = '';
        this.profesion.value = 'Estudiante';
        this.experiencia.checked = true;
        this.expectativas.value = '';
    }
}

window.addEventListener('load', () => {
    new RegistroEvento();
});
