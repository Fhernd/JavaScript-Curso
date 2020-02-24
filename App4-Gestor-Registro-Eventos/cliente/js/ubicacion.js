function inicializarMap(){
    let mapa = new google.maps.Map(document.getElementById('mapaUbicacionEvento'), {
        zoom: 15,
        center: {lat: 4.6097102, lng: -74.081749}
    });

    let marcador = new google.maps.Marker({
        map: mapa,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 4.6097102, lng: -74.081749}
    });

    marcador.addListener('click', () => {
        ventanaInformacion.open(mapa, marcador);
    });

    let ventanaInformacion = new google.maps.InfoWindow({
        content: 'El evento se realizará en Bogotá Colombia.'
    });

    ventanaInformacion.open(mapa, marcador);
}

window.addEventListener('load', () => {
    const scriptMapa = document.createElement('script');
    const llaveApi = '<<AQUÍ_VA_LA_LLAVE_DE_API_GOOGLE_MAPS_JAVASCRIPT>>';
    scriptMapa.src = `https://maps.googleapis.com/maps/api/js?key=${llaveApi}&callback=inicializarMap`;
    document.body.appendChild(scriptMapa);
});
