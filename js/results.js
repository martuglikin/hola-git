// Obtener el parámetro de búsqueda desde la URL
const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get('q'); // Obtener el valor de "q"

const resultado = document.querySelector('.result');
const resultTitle = document.querySelector('.result-title');
let allRecipes = [];

// Mostrar mensaje de búsqueda
// Mostrar mensaje de búsqueda usando innerHTML
if (id) {
  resultTitle.innerHTML = `<h2 class="resultadoNom">Resultados de búsqueda para: "${id}"</h2>`;
} 


// Realizar el fetch para obtener las recetas
fetch(`https://dummyjson.com/recipes/search?q=${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allRecipes = data.recipes; 

    // Si no hay resultados, mostrar un mensaje
    if (!allRecipes || allRecipes.length === 0) {
      resultado.innerHTML += "<p>No se encontraron coincidencias.</p>";
      return;
    }

    // Iterar sobre las recetas y construir el HTML
    for (let i = 0; i < allRecipes.length; i++) {
      const recipe = allRecipes[i]; // Obtener el elemento actual
      const recipeMarkup = `
        <article>
          <img class="img-r" src="${recipe.image}" alt="${recipe.name}">
          <p><b>${recipe.name}</b></p>
          <p>Nivel de dificultad: ${recipe.difficulty}</p>
          <a href="receta.html?id=${recipe.id}">Ir al detalle</a>
        </article>`;
      resultado.innerHTML += recipeMarkup;
    }
    
  })
  .catch(function (error) {
    console.error("Error: " + error);
    resultado.innerHTML = "<p>Hubo un error al cargar los resultados. Por favor, intenta nuevamente.</p>";
  });

// Valudar el formulario
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
