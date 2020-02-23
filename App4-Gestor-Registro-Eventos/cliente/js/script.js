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
        
    }
}