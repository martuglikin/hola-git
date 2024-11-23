const recipesList = document.querySelector('.recipesList');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let allRecipes = [];
let currentPage = 0;
const recipesPerPage = 10; 
const maxRecipes = 30; // Número máximo de recetas disponibles

fetch(`https://dummyjson.com/recipes?limit=${maxRecipes}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    allRecipes = data.recipes; 

    let count = 0; // Contador para recetas mostradas en esta página

    for (let i = 0; i < allRecipes.length; i++) {
      if (i >= currentPage * recipesPerPage && count < recipesPerPage) {
        
        const recipeMarkup = 
          `<article>
            <img src="${allRecipes[i].image}" alt="${allRecipes[i].name}">
            <p class="titleRecipe"><b>${allRecipes[i].name}</b></p>
            <p>Nivel de dificultad: ${allRecipes[i].difficulty}</p>
            <a class="irDetalle" href="receta.html?id=${allRecipes[i].id}">Ir al detalle</a>
          </article>`;

        recipesList.innerHTML += recipeMarkup;
        count++; 
      }
    }
  })
  .catch(function(error) {
    console.error("Error: " + error);
  });

loadMoreBtn.addEventListener('click', function() {
  currentPage++; // Incrementamos la página asi se muestra de la receta 10 para arriba (ahora es la pag 1, desp pasa a la pag 2)
  
  let count = 0; 

  for (let i = 0; i < allRecipes.length; i++) {
    if (i >= currentPage * recipesPerPage && count < recipesPerPage) {
      const recipeMarkup = 
        `<article>
          <img src="${allRecipes[i].image}" alt="${allRecipes[i].name}">
          <p class="titleRecipe"><b>${allRecipes[i].name}</b></p>
          <p>Nivel de dificultad: ${allRecipes[i].difficulty}</p>
          <a class="irDetalle" href="receta.html?id=${allRecipes[i].id}">Ir al detalle</a>
        </article>`;

      recipesList.innerHTML += recipeMarkup;
      count++;
    }
  }

  // Ocultar botón si ya no hay más recetas
  if ((currentPage + 1) * recipesPerPage >= maxRecipes || (currentPage + 1) * recipesPerPage >= allRecipes.length) {
    loadMoreBtn.style.display = 'none';
  }
});


//if ((currentPage + 1) * recipesPerPage >= maxRecipes) {
// loadMoreBtn.style.display = 'none';
//} else if ((currentPage + 1) * recipesPerPage >= allRecipes.length) {
//  loadMoreBtn.style.display = 'none';
//}
//}

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