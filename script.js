const formulario = document.getElementById('form');
const enviarBtn = document.querySelector('.send');

enviarBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre').value;
  const apellidoInput = document.getElementById('apellido').value;
  const emailInput = document.getElementById('email').value;
  const companiaInput = document.getElementById('compania').value;
  const telefonoInput = document.getElementById('telefono').value;
  const mensajeTextarea = document.getElementById('mensaje').value;

  console.log(nombreInput, apellidoInput, emailInput, companiaInput, telefonoInput, mensajeTextarea)

  if (
    nombreInput === '' ||
    apellidoInput === '' ||
    emailInput === '' ||
    companiaInput === '' ||
    telefonoInput === '' ||
    mensajeTextarea === ''
  ) {
    alert('Por favor, completa todos los campos.');
  } else {
    const datos = `Nombre: ${nombreInput} Apellido: ${apellidoInput} Email: ${emailInput} Compañía: ${companiaInput} Teléfono: ${telefonoInput} Mensaje: ${mensajeTextarea}`;
    alert('Datos ingresados:' + datos);

    formulario.submit();
  }
});


