const form = document.querySelector('.form');

const FullName = document.querySelector("#NombreCompleto");
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const InvalidFullName = document.querySelector('.NombreCompleto');
const InvalidEmail = document.querySelector('.email');
const InvalidPassword = document.querySelector('.password');

const MensajeIncompleto = 'Por favor complete el campo';

let erroresBool = false;

form.addEventListener('submit', function(event){
    event.preventDefault();
    erroresBool = false;  
     
     if(FullName.value == ""){
      InvalidFullName.style.display = "block";
      InvalidFullName.innerText = MensajeIncompleto;
      erroresBool = true;
    }else{
      InvalidFullName.style.display = 'none';
    }

    
    if(email.value == ""){
      InvalidEmail.style.display = "block";
      InvalidEmail.innerText = MensajeIncompleto;
      erroresBool = true;
    }else{
      InvalidEmail.style.display = "none";
    } 

    
    if(password.value == ""){
      InvalidPassword.style.display = "block";
      InvalidPassword.innerText = MensajeIncompleto;
      erroresBool = true;
    }else{
      InvalidPassword.style.display = "none";
    }

    
    if(erroresBool == false){
      this.submit();
  }
});

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