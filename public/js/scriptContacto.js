// Obtener el formulario de consulta por su ID
const formularioConsulta = document.getElementById('formulario-consulta');

formularioConsulta.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Aquí podrías agregar lógica adicional, como validar los campos

    // Simular envío del formulario (puedes ajustar esta parte según la integración con Formspree)
    const formData = new FormData(formularioConsulta);
    fetch(formularioConsulta.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        // Redirigir a la página de confirmación después del envío exitoso
        window.location.href = 'confirmacionConsulta.html';
        formularioConsulta.reset(); // Limpiar el formulario después del envío
    })
    .catch(error => {
        console.error('Error al enviar la consulta:', error);
        // Aquí podrías manejar errores específicos, como mostrar un mensaje de error al usuario
    });
});


