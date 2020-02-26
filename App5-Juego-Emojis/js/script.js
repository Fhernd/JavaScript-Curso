class EmojiMatchingGame{
    constructor() {
        this.panelIzquierdo = document.getElementById('panelIzquierdo');
        this.panelDerecho = document.getElementById('panelDerecho');
        this.body = document.getElementsByTagName('body')[0];
        this.cantidadEmojis = 5;
        this.imagenEmoji = 'images/emoji.png';

        this.generarEmojis();
        this.body.onclick = this.terminarJuego.bind(this);
    }

    generarEmojis() {
        for(let i = 1; i < this.cantidadEmojis; ++i){
            let nuevoEmoji = document.createElement('img');
            nuevoEmoji.src = this.imagenEmoji;
            let x = Math.floor(Math.random() * 380);
            let y = Math.floor(Math.random() * 400);
            nuevoEmoji.style.left = `${x}px`;
            nuevoEmoji.style.top = `${y}px`;

            this.panelIzquierdo.appendChild(nuevoEmoji);
        }

        this.configurarPaneles();
    }

    configurarPaneles() {
        let clonacionEmojis = this.panelIzquierdo.cloneNode(true);
        clonacionEmojis.removeChild(clonacionEmojis.lastChild);

        this.panelDerecho.appendChild(clonacionEmojis);

        this.panelIzquierdo.lastChild.onclick = this.pasarSiguienteNivel.bind(this);
    }

    pasarSiguienteNivel(evento) {
        evento.stopPropagation();

        while(this.panelIzquierdo.hasChildNodes()){
            this.panelIzquierdo.removeChild(this.panelIzquierdo.lastChild);
        }

        while(this.panelDerecho.hasChildNodes()){
            this.panelDerecho.removeChild(this.panelDerecho.lastChild);
        }

        this.cantidadEmojis += 3;

        this.generarEmojis();
    }

    terminarJuego() {
        alertify.alert("¡Has perdido!");

        this.panelIzquierdo.lastChild.onclick = null;
        this.body.onclick = null;
    }
}

window.addEventListener('load', () => {
    new EmojiMatchingGame();
});
