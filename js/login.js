const form = document.querySelector('.log')

//Campos

const email = document.getElementById('email')
const contrasena = document.getElementById('contrasena')

//Invalid texts
const invalidEmail = document.querySelector('.email')
const invalidPassword = document.querySelector('.password')


//Crear event listener submit para el form
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