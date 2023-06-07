// Muestra una ventana emergente con un mensaje con los datos ingresados por el usuario en el form Contacto
// Y muestra una ventana emergente si falta llenar uno de los campos
$(document).ready(function() {
    $('#formreservas').submit(function(event) {
        event.preventDefault();
  
        const nombre = $('#name_r').val().trim();
        const email = $('#email_r').val().trim();
        const tel = $('#tel_r').val().trim();
        const hora = $('#hora').val().trim();
        const fecha = $('#fecha').val().trim();
        const asistentes = $('#asistentes').val().trim();
  
        if (nombre.length == 0 || email.length == 0 || tel.length == 0 || hora.length == 0 || fecha.length == 0 || asistentes.length == 0) {
            window.alert('Por favor complete todos los campos requeridos.');
        } else {
            const mensaje = 'Estimad@ ' + nombre + ', su reserva para el día ' + fecha + ' a las ' + hora + ' ha sido recibida con éxito. Pronto recibirá una confirmación a su email ' + email + '. Gracias por reservar con nosotros.';
            window.alert(mensaje);
            $('#formreservas').trigger('reset');
        }
    });
  });


// Abre el modal que muestra la imagen, título y texto de cada card al hacer click sobre una imagen
$(document).ready(function() {
  const img_tarjetas = $(".img-tarjetas");
  const ventana_modal = $("#ventana-modal");
  const imagen_modal = $("#imagen-modal");
  const titulo_modal = $("#titulo-modal");
  const contenedor_texto = $("#contenedor-texto");

  img_tarjetas.click(function() {
    ventana_modal.css("display", "block");
    imagen_modal.attr("src", $(this).attr("src"));
    const titulo = $(this).siblings(".titulo-card").text();
    const contenido_texto = $(this).siblings(".contenido-texto").text();
    titulo_modal.html("<h5>" + titulo + "</h5>");
    contenedor_texto.html("<p>" + contenido_texto + "</p>");
  });

  const span = $(".cerrar");
  span.click(function() {
    ventana_modal.css("display", "none");
  });
});