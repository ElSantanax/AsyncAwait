function descargarCliente() {
    return new Promise((resolve, reject) => {

        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se cargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

async function ejecutar() {
    try {
        const respuesta = await descargarCliente();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();