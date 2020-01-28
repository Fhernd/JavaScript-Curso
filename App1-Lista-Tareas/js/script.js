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
}