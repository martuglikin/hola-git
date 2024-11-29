const queryString = location.search;
const queryParams = new URLSearchParams(queryString);
const tipoCategoria = queryParams.get('categoria'); 

if (tipoCategoria) {
  const titleCategory = document.querySelector('.title-category');
  titleCategory.innerHTML = `<h1>Resultados para la categoría: "${tipoCategoria}"</h1>`;
  
fetch(`https://dummyjson.com/recipes/tag/${tipoCategoria}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data); 
      const informacion = data.recipes; 
      const infoDetail = document.querySelector('.category-detail');
      let info = "";
      
      for (let i = 0; i < informacion.length; i++) {
        const detalle = informacion[i];
        const gory = `
          <article class='datallado'>
              <img src='${detalle.image}' alt='${detalle.name}'>
              <h2>${detalle.name}</h2>
              <p>Dificultad: ${detalle.difficulty}</p>
              <a href='receta.html?id=${detalle.id}'>Ver detalle</a>
          </article>
        `;
        info += gory; 
      }
      infoDetail.innerHTML = info; 
    })
    .catch(function(error) {
      console.log('Error: ' + error);
    });
} else {
  console.log('Categoría no especificada en la URL');
}

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