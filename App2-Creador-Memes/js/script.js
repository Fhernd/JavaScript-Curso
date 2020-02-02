const ANCHO_DISPOSITIVO = window.innerWidth;

class CreadorMemes{
    constructor() {
        this.imagenCanvas = document.getElementById('imagenCanvas');
        this.imagen = document.getElementById('imagen');
        this.textoSuperior = document.getElementById('textoSuperior');
        this.textoInferior = document.getElementById('textoInferior');
        this.descargarMeme = document.getElementById('descargarMeme');

        this.crearCanvas();
    }

    crearCanvas() {
        let alto = Math.min(480, ANCHO_DISPOSITIVO - 30);
        let ancho = Math.min(640, ANCHO_DISPOSITIVO - 30);

        this.imagenCanvas.height = alto;
        this.imagenCanvas.width = ancho;
    }
}
