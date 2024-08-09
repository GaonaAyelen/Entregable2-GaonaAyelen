const serviciosDeSoldadura = [

    {
        nombre: "Soldadura MIG",
        descripcion: "Soldadura de alta velocidad y eficiencia, ideal para trabajos en metales no ferrosos.",
        precio: 100
    },
    {
        nombre: "Soldadura TIG",
        descripcion: "Ofrece gran precisión y control, ideal para metales delgados y trabajos detallados.",
        precio: 200
    },
    {
        nombre: "Soldadura por arco",
        descripcion: "Método tradicional y versátil para una amplia gama de aplicaciones.",
        precio: 300
    },
    {
        nombre: "Soldadura de aluminio",
        descripcion: "Especializada en trabajos con aluminio, garantizando uniones fuertes y duraderas.",
        precio: 400
    },
    {
        nombre: "Soldadura por arco",
        descripcion: "Método tradicional y versátil para una amplia gama de aplicaciones.",
        precio: 300
    },
    {
        nombre: "Soldadura de aluminio",
        descripcion: "Especializada en trabajos con aluminio, garantizando uniones fuertes y duraderas.",
        precio: 400
    },

];
/* mi local storage */
localStorage.getItem("serviciosDeSoldadura", JSON.stringify(serviciosDeSoldadura));
let storageServicios = JSON.parse(localStorage.getItem("serviciosDeSoldadura"))

function mostrarServicios() {
    const listaServicios = document.getElementById('lista-servicios');
    serviciosDeSoldadura.forEach((servicio, index) => {
        const elemento = document.createElement('div');
        elemento.innerHTML = `
                <h3>${servicio.nombre}</h3>
                <p>${servicio.descripcion}</p>
                <p>Precio: $${servicio.precio}</p>
                <button class="solicitar-btn" data-tipo="${index}">Solicitar</button>
            `;
        listaServicios.appendChild(elemento)
    });
}


function solicitarServicio(indice) {
    const servicio = serviciosDeSoldadura[indice];
    if (servicio) {
        alert(`Has solicitado el servicio de ${servicio.nombre}. El precio es $${servicio.precio}.`);

        let serviciosSolicitados = JSON.parse(localStorage.getItem('serviciosSolicitados')) || [];
        serviciosSolicitados.push(servicio);
        localStorage.setItem('serviciosSolicitados', JSON.stringify(serviciosSolicitados));
        
        mostrarServiciosSolicitados();
    } else {
        console.error(`Error: Servicio con índice ${indice} no encontrado`);
    }
}

function mostrarServiciosSolicitados() {
    const serviciosSolicitados = JSON.parse(localStorage.getItem('serviciosSolicitados')) || [];
    const listaSolicitudes = document.getElementById('lista-solicitudes');

    if (listaSolicitudes) {
        listaSolicitudes.innerHTML = '';
        if (serviciosSolicitados.length > 0) {
            serviciosSolicitados.forEach(servicio => {
                const elemento = document.createElement('li');
                elemento.textContent = `${servicio.nombre} - $${servicio.precio}`;
                listaSolicitudes.appendChild(elemento);
            });
        } else {
            listaSolicitudes.innerHTML = '<li>No hay servicios solicitados</li>';
        }
    }
}
function limpiarSolicitudes() {
    localStorage.removeItem('serviciosSolicitados');
    mostrarServiciosSolicitados();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado");
    mostrarServicios();
    mostrarServiciosSolicitados();


    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('solicitar-btn')) {
            const tipo = e.target.getAttribute('data-tipo');
            solicitarServicio(parseInt(tipo));
        }
    });


    const botonLimpiar = document.getElementById('limpiar-solicitudes');
    if (botonLimpiar) {
        botonLimpiar.addEventListener('click', limpiarSolicitudes)
    }
});