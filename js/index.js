const recipesList = document.querySelector('.recipesList');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let allRecipes = [];
let currentPage = 0;
const recipesPerPage = 10; 

function loadRecipes() {
  
  fetch('https://dummyjson.com/recipes')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      allRecipes = data.recipes;

      // Llamamos a la función que mostrará las recetas correspondientes a la página inicial
      displayRecipes();
    })
    .catch(function(error) {
      console.error("Error: " + error);
    });
}

// Función para mostrar las recetas correspondientes a la página actual
function displayRecipes() {

  const inicio = currentPage * recipesPerPage;
  const end = inicio + recipesPerPage; 

  for (let i = inicio; i < end; i++) {
    if (i < allRecipes.length) {  
      const recipe = allRecipes[i];
      const recipeMarkup = `
        <article>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p>Título: ${recipe.name}</p>
          <p>Nivel de dificultad: ${recipe.difficulty}</p>
          <a href="receta.html?id=${recipe.id}">Ir al detalle</a>
        </article>`;

      recipesList.innerHTML += recipeMarkup; 
    }
  }
}

// Evento para cargar más recetas al hacer clic en el botón
loadMoreBtn.addEventListener('click', function() {
  currentPage++; 
  displayRecipes(); 
});

loadRecipes();