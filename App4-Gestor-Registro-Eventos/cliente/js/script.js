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

    }

    resaltarCamposConErrores(resultado) {
        if(!resultado.nombre){
            this.nombre.parentElement.classList.add('has-error');
        }
        
    }

    prepararEnvioDatos(datosFormulario){

    }
}