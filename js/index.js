const recipesList = document.querySelector('.recipesList');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let allRecipes = [];
let currentPage = 0;
const recipesPerPage = 10; 
const maxRecipes = 30; 

function loadRecipes() {
  fetch('https://dummyjson.com/recipes')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      allRecipes = data.recipes;

    
      displayRecipes();
    })
    .catch(function(error) {
      console.error("Error: " + error);
    });
}

// Función para mostrar las recetas correspondientes a la página actual
function displayRecipes() {
  const inicio = currentPage * recipesPerPage;
  const fin = inicio + recipesPerPage;

  for (let i = inicio; i < fin; i++) {
    if (i < allRecipes.length) {  
      const recipe = allRecipes[i];
      const recipeMarkup = `
        <article>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p><b> ${recipe.name}</b></p>
          <p>Nivel de dificultad: ${recipe.difficulty}</p>
          <a href="receta.html?id=${recipe.id}">Ir al detalle</a>
        </article>`;

      recipesList.innerHTML += recipeMarkup; 
    }
  }

  // Ocultar botón si no hay más recetas para cargar
  if ((currentPage + 1) * recipesPerPage >= maxRecipes || (currentPage + 1) * recipesPerPage >= allRecipes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', function() {
  currentPage++; 
  displayRecipes(); 
});

loadRecipes();

//if ((currentPage + 1) * recipesPerPage >= maxRecipes) {
// loadMoreBtn.style.display = 'none';
//} else if ((currentPage + 1) * recipesPerPage >= allRecipes.length) {
//  loadMoreBtn.style.display = 'none';
//}
//}