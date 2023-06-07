// Función que se ejecuta al hacer click en el link "Contacto" del Nav Dos y que visibiliza el form Contacto
// A su vez, esconde el form Reservas en caso que se haya mostrado
function mostrarFormContacto() {
  const showFormContacto = document.querySelector('#formcontacto')
  const showFormReservas = document.querySelector('#formreservas')
  showFormContacto.style.display = 'block';
  showFormContacto.classList.add('m-2', 'p-2');
  if (showFormReservas.style.display === 'block') {
    showFormReservas.style.display = 'none';
  };
}

// Función que se ejecuta al hacer click en el link "Reservas" del Nav Dos y que visibiliza el form Reservas
// A su vez, esconde el form Contacto en caso que se haya mostrado
function mostrarFormReservas() {
  const showFormReservas = document.querySelector('#formreservas')
  const showFormContacto = document.querySelector('#formcontacto')
  showFormReservas.style.display = 'block';
  showFormReservas.classList.add('m-2', 'p-2');
  if (showFormContacto.style.display === 'block') {
    showFormContacto.style.display = 'none';
  };
}

// Muestra una ventana emergente con un mensaje con los datos ingresados por el usuario en el form Contacto
// Y muestra una ventana emergente si falta llenar uno de los campos
const enviarFormContacto = document.getElementById('formcontacto')
enviarFormContacto.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = document.getElementById('name_c').value.trim();
  const email = document.getElementById('email_c').value.trim();
  const tel = document.getElementById('tel_c').value.trim();
  const motivo = document.getElementById('motivo').value.trim();
  const comentario = document.getElementById('comentario').value.replace(/\s+/g, '');
  if (nombre.length == 0 || email.length == 0 || tel.length == 0 || motivo.length == 0 || comentario.length == 0) {
    window.alert('Por favor complete todos los campos requeridos.');
  } else {
    const mensaje = `Estimad@ ${nombre}, su ${motivo.toLowerCase()} se ha enviado exitosamente. Pronto enviaremos una respuesta a su email ${email}. Gracias por ponerse en contacto con nosotros.`;
    window.alert(mensaje);
    enviarFormContacto.submit();
    enviarFormContacto.reset();
  };
})

// Botón para ir arriba
const botonArriba = document.getElementById('btn-back-to-top');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    botonArriba.style.display = 'block';
  } else {
    botonArriba.style.display = 'none';
  }
}
botonArriba.addEventListener('click', backToTop);
function backToTop() {
  document.body.scrollTop = 0; // Para navegadores que no sean Firefox
  document.documentElement.scrollTop = 0; // Para Firefox
}