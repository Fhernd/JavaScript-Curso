class EmojiMatchingGame{
    constructor() {
        this.panelIzquierdo = document.getElementById('panelIzquierdo');
        this.panelDerecho = document.getElementById('panelDerecho');
        this.body = document.getElementsByTagName('body')[0];
        this.cantidadEmojis = 5;
        this.imagenEmoji = 'images/emoji.png';

        this.generarEmojis();
    }

    generarEmojis() {
        for(let i = 1; i < this.cantidadEmojis; ++i){
            let nuevoEmoji = document.createElement('img');
            nuevoEmoji.src = this.imagenEmoji;
            
        }
    }
}