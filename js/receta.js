
const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get('id');


const nombreReceta = document.querySelector('.nombreReceta');
const instruccionesList = document.querySelector('.instrucciones'); 
const tiempo = document.querySelector('.tiempo');
const imgReceta = document.querySelector('.imgReceta');
const listaCategorias = document.querySelector('.listaCategorias');


fetch(`https://dummyjson.com/recipes/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    
    nombreReceta.innerText = data.name;
    tiempo.innerText = `Tiempo de Cocción: ${data.cookTimeMinutes} minutos`;
    imgReceta.innerHTML = `<img src="${data.image}" alt="${data.name}">`;


    if (data.instructions && data.instructions.length > 0) {
      instruccionesList.innerHTML = '';
      let instruccionesHTML = ''; 
      for (let i = 0; i < data.instructions.length; i++) {
        instruccionesHTML += `<li>${data.instructions[i]}</li>`; 
      }
      instruccionesList.innerHTML = instruccionesHTML; 
    }

    if (data.tags && data.tags.length > 0) {
      listaCategorias.innerHTML = " ";
      let categoriasHTML = ''; 
      for (let i = 0; i < data.tags.length; i++) {
        categoriasHTML += `<li><a href="category.html?categoria=${data.tags[i]}">${data.tags[i]}</a></li>`;
      }
      listaCategorias.innerHTML = categoriasHTML; 
    }
  })
  .catch(function (error) {
    console.log('Error al obtener los datos de la receta:', error);
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