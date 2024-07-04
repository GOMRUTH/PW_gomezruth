// scriptEnvioPedidos.js
document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    const listaProductos = document.getElementById('lista-productos');
    const totalSpan = document.getElementById('total');

    // Llenar la lista de productos en el carrito
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio unitario: $${producto.precio} - Subtotal: $${producto.precio * producto.cantidad}`;
        listaProductos.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    // Actualizar el total
    totalSpan.textContent = `$${total}`;

    // Formulario de pedido
    const formulario = document.getElementById('formulario-pedido');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente
        enviarPedido();
    });
});

function enviarPedido() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const formaPago = document.getElementById('forma-pago').value;
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Calcular el total nuevamente dentro de la función
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    if (!nombre || !apellido || !email || !telefono || !direccion || !formaPago || carrito.length === 0) {
        alert('Por favor, completa todos los campos y selecciona la forma de pago.');
        return;
    }

    // Aquí podrías generar el PDF del comprobante o simplemente redirigir a confirmacionPedido.html
    const confirmacion = {
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        formaPago,
        carrito,
        total
    };

    localStorage.setItem('confirmacionPedido', JSON.stringify(confirmacion));
    localStorage.removeItem('carrito'); // Limpiar el carrito después de enviar el pedido

    // Mostrar alerta y redireccionar después de 500ms
    alert('Pedido enviado correctamente!');
    setTimeout(function() {
        window.location.href = 'confirmacionPedido.html';
    }, 500);
}

function cancelarPedido() {
    localStorage.removeItem('carrito');
    alert('Pedido cancelado');
    window.location.href = 'index.html';
}

function otroProducto() {
    window.location.href = 'productos.html';
}
