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
        solicitudApi('estadisticas')
        .then(respuesta => {
            this.datosEstadisticas = respuesta;

            this.indicadorCarga.classList.add('hidden');
            this.tabsEstadisticas.classList.remove('hidden');
            this.areaEstadisticas.classList.remove('hidden');

            this.cargarDatosProfesion();
        })
        .catch(() => {
            this.indicadorCarga.classList.add('hidden');
            this.errorCarga.classList.remove('hidden');
        });
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
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: ['white', 'white', 'white', 'white']
            }],
            labels: ['Estudiante', 'Desarrollador', 'Ingeniero', 'Otro']
        };

        new Chart(this.graficoProfesion, {type: 'pie', data});
    }

    cargarDatosExperiencia(evento = null){
        if(evento){
            evento.preventDefault();
        }

        this.ocultarGraficos();
        this.graficoExperiencia.classList.remove('hidden');
        this.tabExperiencia.classList.add('active');

        const data = {
            datasets: [{
                data: this.datosEstadisticas.experiencia,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: ['white', 'white', 'white']
            }],
            labels: ['Principiante', 'Intermedio', 'Avanzado']
        };

        new Chart(this.graficoExperiencia, {type: 'pie', data});
    }

    cargarDatosEdad(evento = null){
        if(evento){
            evento.preventDefault();
        }

        this.ocultarGraficos();
        this.graficoEdad.classList.remove('hidden');
        this.tabEdad.classList.add('active');

        const data = {
            datasets: [{
                data: this.datosEstadisticas.edad,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: ['white', 'white', 'white']
            }],
            labels: ['Grupo 40 Años', 'Grupo 30 Años', 'Grupo 20 Años']
        };

        new Chart(this.graficoEdad, {type: 'pie', data});
    }

    ocultarGraficos() {
        this.graficoProfesion.classList.add('hidden');
        this.graficoExperiencia.classList.add('hidden');
        this.graficoEdad.classList.add('hidden');
        
        this.tabProfesion.classList.remove('active');
        this.tabExperiencia.classList.remove('active');
        this.tabEdad.classList.remove('active');
    }
}

window.addEventListener('load', () => {
    new Estadisticas();
});
