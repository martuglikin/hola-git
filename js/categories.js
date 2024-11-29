fetch('https://dummyjson.com/recipes/tags')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const DetalleCategorias = document.querySelector('.categorias-detalles');
    let category = "";
    for (let i = 0; i < data.length; i++) {
      category += `
        <article class='category'>
            <h2><a href="category.html?categoria=${data[i]}">${data[i]}</a></h2>
        </article>
      `;
    }
    DetalleCategorias.innerHTML = category;
  })
  .catch(function(error) {
    console.log("Error: " + error);
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