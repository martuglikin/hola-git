// Obtener parámetros de la URL
const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get('id');

// Seleccionar elementos del DOM
const nombreReceta = document.querySelector('.nombreReceta');
const instruccionesList = document.querySelector('.instrucciones'); 
const tiempo = document.querySelector('.tiempo');
const imgReceta = document.querySelector('.imgReceta');
const listaCategorias = document.querySelector('.listaCategorias');

// Llamada a la API para obtener los detalles de la receta
fetch(`https://dummyjson.com/recipes/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    // Asignar información a los elementos HTML
    nombreReceta.innerText = data.name;
    tiempo.innerText = `Tiempo de Cocción: ${data.cookTimeMinutes} minutos`;
    imgReceta.innerHTML = `<img src="${data.image}" alt="${data.name}">`;

    // Crear la lista de instrucciones como una lista ordenada
    if (data.instructions && data.instructions.length > 0) {
      instruccionesList.innerHTML = '';
      let instruccionesHTML = ''; 
      for (let i = 0; i < data.instructions.length; i++) {
        instruccionesHTML += `<li>${data.instructions[i]}</li>`; 
      }
      instruccionesList.innerHTML = instruccionesHTML; 
    }

    // Crear la lista de categorías dinámicamente
    if (data.tags && data.tags.length > 0) {
      listaCategorias.innerHTML = '';
      let categoriasHTML = ''; 
      for (let i = 0; i < data.tags.length; i++) {
        categoriasHTML += `<li><a href="categoria.html?name=${data.tags[i]}">${data.tags[i]}</a></li>`;
      }
      listaCategorias.innerHTML = categoriasHTML; 
    }
  })
  .catch(function (error) {
    console.log('Error al obtener los datos de la receta:', error);
  });