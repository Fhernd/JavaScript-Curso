const ANCHO_DISPOSITIVO = window.innerWidth;

class CreadorMemes{
    constructor() {
        this.imagenCanvas = document.getElementById('imagenCanvas');
        this.imagen = document.getElementById('imagen');
        this.textoSuperior = document.getElementById('textoSuperior');
        this.textoInferior = document.getElementById('textoInferior');
        this.descargarMeme = document.getElementById('descargarMeme');

        this.crearCanvas();
        this.agregarEventListeners();
    }

    crearCanvas() {
        let alto = Math.min(480, ANCHO_DISPOSITIVO - 30);
        let ancho = Math.min(640, ANCHO_DISPOSITIVO - 30);

        this.imagenCanvas.height = alto;
        this.imagenCanvas.width = ancho;
    }

    agregarEventListeners() {
        this.crearMeme = this.crearMeme.bind(this);
        this.descargarMeme = this.descargarMeme.bind(this);
        let entradas = [this.textoSuperior, this.textoInferior, this.imagen];

        entradas.forEach(e => e.addEventListener('keyup', this.crearMeme));
        entradas.forEach(e => e.addEventListener('change', this.crearMeme));
        this.descargarMeme.addEventListener('click', this.descargarMeme);
    }

    crearMeme() {
        let contexto = this.imagenCanvas.getContext('2d');

        if(this.imagen.files && this.imagen.files[0]){
            let lector = new FileReader();

            lector.onload = function() {
                let image = new Image();

                image.onload = function() {
                    this.imagenCanvas.height = image.height;
                    this.imagenCanvas.width = image.width;

                    contexto.clearRect(0, 0, this.imagenCanvas.height, this.imagenCanvas.width);
                    contexto.drawImage(image, 0, 0);

                    let tamagnioFuente = ((this.imagenCanvas.width + this.imagenCanvas.height)/2) * 4 / 100;
                    contexto.font = `${tamagnioFuente}pt sans-serif`;
                    contexto.textAlign = 'center';
                    contexto.textBaseline = 'top';

                    contexto.lineJoin = 'round';
                    contexto.lineWidth = tamagnioFuente/5;
                    contexto.strokeStyle = 'black';
                    contexto.fillStyle = 'white';

                    let textoArriba = this.textoSuperior.value.toUpperCase();
                    let textoAbajo = this.textoInferior.value.toUpperCase();

                    contexto.strokeText(textoArriba, this.imagenCanvas.width/2, this.imagenCanvas.height*(5/100));
                    contexto.fillText(textoArriba, this.imagenCanvas.width/2, this.imagenCanvas.height*(5/100));
                }
            }
        }
    }

    descargarMeme() {

    }
}
