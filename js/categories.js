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