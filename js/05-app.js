const url = 'https://rickandmortyapi.com/api/character';

document.addEventListener('DOMContentLoaded', obtenerDatos);

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}