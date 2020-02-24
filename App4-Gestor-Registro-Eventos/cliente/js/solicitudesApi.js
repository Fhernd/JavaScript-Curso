function solicitudApi(ruta, body={}, method='GET'){
    let solicitud = new Promise((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const detallesSolicitud = {
            method,
            mode: 'cors',
            headers
        };

        if(method !== 'GET'){
            detallesSolicitud.body = JSON.stringify(body);
        }

        function gestionarErrores(respuesta){
            if (respuesta.ok){
                return respuesta.json();
            } else {
                throw Error(respuesta.statusError);
            }
        }

        fetch(`http://localhost:3900/${ruta}`, detallesSolicitud)
        .then(gestionarErrores)
        .then(resolve)
        .then(reject);
    });

    const temporizador = new Promise((resolve, reject) => {
        setTimeout(reject, 7000, 'La solicitud no se pudo completar.');
    });

    return new Promise((resolve, reject) => {
        Promise.race([solicitud, temporizador])
        .then(resolve)
        .catch(reject);
    });
}