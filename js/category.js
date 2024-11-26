const queryString = location.search;
const queryParams = new URLSearchParams(queryString);
const tipoCategoria = queryParams.get('categoria'); 

if (tipoCategoria) {
  fetch(`https://dummyjson.com/recipes/search?q=${tipoCategoria}`)
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