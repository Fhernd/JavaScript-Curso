class ListaTareas{
    constructor(){
        this.tareas = JSON.parse(localStorage.getItem('tareas'));

        if (!this.tareas) {
            this.tareas = [
                {tarea: 'Aprender JavaScript', completado: false},
                {tarea: 'Aprender Python', completado: false},
                {tarea: 'Aprender C++', completado: true}
            ];
        }

        this.cargarTareas();
        this.agregarEventListeners();
    }

    agregarEventListeners() {
        document.getElementById('recordatorio').addEventListener('keypress', (evento) => {
            if(evento.keyCode == 13){
                this.agregarTarea(evento.target.value);
                evento.target.value = '';
            }
        });
    }

    cargarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
        let htmlTareas = this.tareas.reduce((html, tarea, indice) => html += this.generarHtmlTarea(tarea, indice), '');
        document.getElementById('listaTareas').innerHTML = htmlTareas;
    }

    generarHtmlTarea() {
        
    }

    agregarTarea(tarea) {
        let padre = document.getElementById('recordatorio').parentElement;

        if (tarea !== ''){
            padre.classList.remove('has-error');

            let nuevaTarea = {
                tarea,
                completado: false
            };

            this.tareas.push(nuevaTarea);
            this.cargarTareas();
        } else {
            padre.classList.add('has-error');
        }
    }

    agregarTareaClick() {
        let recordatorio = document.getElementById('recordatorio');
        let tarea = recordatorio.value;
        if (tarea){
            this.agregarTarea(tarea);
            recordatorio.value = '';
        }
    }
}

let listaTareas;

window.addEventListener('load', () => {
    listaTareas = new ListaTareas();
})
