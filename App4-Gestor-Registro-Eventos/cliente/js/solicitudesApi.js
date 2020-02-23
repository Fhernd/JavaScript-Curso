function solicitudApi(ruta, body={}, method='GET'){
    let solicitud = new Promise((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const detallesSolicitud = {
            method,
            modo: 'cors',
            headers
        };

        if(method !== 'GET'){
            detallesSolicitud.body = JSON.stringify(body);
        }

        
    });
}