const productos = [
    { id:1, nombre: "Colita Moño Rosa", precio: 1000, descripcion: "Cantidad: x2", imagen: "../public/img/productos/photo_2024-03-24_21-51-37.jpg" },
    { id:2, nombre: "Colita Moño Azul", precio: 1500, descripcion: "Cantidad: x2", imagen: "../public/img/productos/photo_2024-03-24_21-51-26.jpg" },
    { id:3, nombre: "Colita Moño Coquette", precio: 900, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/9bd059a892e6655abbf32ae355e5b353.jpg" },
    { id:4, nombre: "Colitas Moños Blanco y Azul", precio: 1800, descripcion: "Cantidad: x2", imagen: "../public/img/productos/1bcdd5606e7d636121d091bb702ac0b2.jpg" },
    { id:5, nombre: "Moño Coquette Celeste y Blanco", precio: 1500, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/461a82f486aaad86b9d65aa212f107db.jpg" },
    { id:6, nombre: "Moño Coquette Blanco y Celeste", precio: 1800, descripcion: "Cantidad: x2", imagen: "../public/img/productos/64c574bbbd77cc1451333f793d3fe25a.jpg" },
    { id:7, nombre: "Vincha Moños", precio: 2000, descripcion: "Cantidad: x3", imagen: "../public/img/productos/7778393259587103e5f45ccf826cc860.jpg" },
    { id:8, nombre: "Moño Coquette", precio: 1300, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/741bc23d9700d7d097bf554c00be1e59.jpg" },
    { id:9, nombre: "Almohada Vaquita", precio: 1600, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/photo_2024-03-24_21-50-35.jpg" },
    { id:10, nombre: "Muñeca Piernas largas", precio: 1800, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/4e455a48f061e2b5161d70612ac9b080.jpg" },
    { id:11, nombre: "Almohada Gatito", precio: 1500, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/4fd2c22d4fb69181334e03b4cc3d3a56.jpg" },
    { id:12, nombre: "Muñeca Coqueta", precio: 1000, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/66fdef09040ce827bec7fcca69b45591.jpg" },
    { id:13, nombre: "Muñeca Gatita", precio: 1100, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/93fd9a33695aa3d68ba74f371e94c783.jpg" },
    { id:14, nombre: "Muñeca Duende Blanco", precio: 1300, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/5589a2b1e408c9894ebc7d2c6f21b9a4.jpg" },
    { id:15, nombre: "Muñeco Monito Celeste", precio: 1400, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/9250684287b27643701b5b78ac792a79.jpg" },
    { id:16, nombre: "Combo Almohada + Muñeca", precio: 1700, descripcion: "Cantidad: x Unid.", imagen: "../public/img/productos/photo_2024-03-24_21-50-32.jpg" }
];

document.addEventListener('DOMContentLoaded', function() {
    const contenedorMoños = document.getElementById('contenedorMoños');
    const contenedorMuñecas = document.getElementById('contenedorMuñecas');

    function cargarProductos() {
        productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('ProductoContenido');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <span>$${producto.precio}</span>
                <button class="boton-detalle-carrito" onclick="window.location.href='detalleProducto.html?id=${producto.id}'">Ver detalles</button>
            `;
            if (producto.nombre.includes('Moño')) {
                contenedorMoños.appendChild(divProducto);
            } else {
                contenedorMuñecas.appendChild(divProducto);
            }
        });
    }

    cargarProductos();
});