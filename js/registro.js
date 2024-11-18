//Formulario
const form = document.querySelector('form');

//Campos
const email = document.getElementById('email');
const password = document.getElementById('password');

//Invalid Texts
const InvalidEmail = document.querySelector('.email');
const InvalidPassword = document.querySelector('.password');

// Crear event listener submit para el form

form.addEventListener('submit', function(event){
    event.preventDefault();
    let errors = false;

    if(email.value === ""){
        InvalidEmail.innerText = "Por favor complete el campo";
        InvalidEmail.style.display = "block";
        errors = true;
    }else{
        InvalidEmail.style.display = "none";
    }

    if(password.value === ""){
        InvalidPassword.innerText = "Por favor complete el campo";
        InvalidPassword.style.display = "block";
        errors = true;
    }else{
        InvalidPassword.style.display = "none";
    }

    if(!errors){
        this.submit();
    }
});