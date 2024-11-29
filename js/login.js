const form = document.querySelector('.log')


const email = document.getElementById('email')
const contrasena = document.getElementById('contrasena')

const invalidEmail = document.querySelector('.email')
const invalidPassword = document.querySelector('.password')



form.addEventListener('submit', function(event){
    event.preventDefault();
    let error= false;
    if(email.value === ''){
        alert('Por favor complete el campo email')
        error=true;
    }else{
        invalidEmail.style.display='none';
    }
    if(password.value === ''){
        
        alert(' Por favor complete el campo contraseña');
    
        error=true;
    }else{
        invalidPassword.style.display='none';
    
    }
   
    if(!error){
        this.submit();
    }
       
})

const busqueda = document.querySelector('.b');
const invalidFeedback = document.querySelector('.invalid-feedback');
const formulario = document.querySelector('.buscador');

formulario.addEventListener('submit', function (event) {
  const valorBusqueda = busqueda.value;
  let mensajeError = '';

  if (busqueda.value === '') {
    mensajeError = 'No completaste el campo de búsqueda';
  } else if (busqueda.value.length < 3) {
    mensajeError = 'Debes completar al menos 3 caracteres';
  }

  if (mensajeError) {
    event.preventDefault();
    invalidFeedback.innerHTML = mensajeError;
    invalidFeedback.style.display = 'block';
  } else {
    invalidFeedback.style.display = 'none';
  }
});