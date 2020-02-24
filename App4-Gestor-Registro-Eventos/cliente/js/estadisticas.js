class Estadisticas{
    constructor() {
        this.indicadorCarga = document.querySelector('#indicadorCarga');
        this.errorCarga = document.querySelector('#errorCarga');

        this.tabsEstadisticas = document.querySelector('#tabsEstadisticas');
        this.tabProfesion = document.querySelector('#tabProfesion');
        this.tabExperiencia = document.querySelector('#tabExperiencia');
        this.tabEdad = document.querySelector('#tabEdad');

        this.areaEstadisticas = document.querySelector('#areaEstadisticas');
        this.graficoProfesion = document.querySelector('#graficoProfesion');
        this.graficoExperiencia = document.querySelector('#graficoExperiencia');
        this.graficoEdad = document.querySelector('#graficoEdad');

        this.datosEstadisticas;
        this.cargarDatosEstadisticas();
        this.agregarEventListeners();
    }

    cargarDatosEstadisticas() {

    }

    agregarEventListeners() {
        this.tabProfesion.addEventListener('click', this.cargarDatosProfesion.bind(this));
        this.tabExperiencia.addEventListener('click', this.cargarDatosExperiencia.bind(this));
        this.tabEdad.addEventListener('click', this.cargarDatosEdad.bind(this));
    }

    cargarDatosProfesion(evento = null){
        if(evento){
            evento.preventDefault();
        }

        this.ocultarGraficos();
        this.graficoProfesion.classList.remove('hidden');
        this.tabProfesion.classList.add('active');

        const data = {
            datasets: [{
                data: this.datosEstadisticas.profesion,
                backgroundColor:[
                    
                ]
            }]
        }
    }

    cargarDatosExperiencia(evento = null){
        if(evento){
            evento.preventDefault();
        }

        
    }

    cargarDatosEdad(evento = null){
        if(evento){
            evento.preventDefault();
        }

        
    }

    ocultarGraficos() {

    }
}