

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
    
    ];
    console.log(serviciosDeSoldadura);
    
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
            listaServicios.appendChild(elemento);
        });
    }
    

    document.addEventListener('DOMContentLoaded', mostrarServicios);

    function solicitarServicio(tipo) {
        const servicio = serviciosDeSoldadura[tipo];
        if (servicio) {
            alert(`Has solicitado el servicio de ${servicio.nombre}. El precio es $${servicio.precio}.`);
        } else {
            console.error(`Error: Servicio con índice ${tipo} no encontrado`);
        }
    }
    
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('solicitar-btn')) {
            const tipo = e.target.getAttribute('data-tipo');
            solicitarServicio(tipo);
        }
    });