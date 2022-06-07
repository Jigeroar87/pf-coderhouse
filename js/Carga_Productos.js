let cardContainer;

var tasks = [
    {
        "title" : "Alcancia Unicornio",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "foto": "../imagenes/Productos/Alcancia_Unicornio.JPG"
    },
    {
        "title" : "Alcancia Unicornio",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "foto": "../imagenes/Productos/Alcancia_Unicornio.JPG"
    },
    {
        "title" : "Alcancia Unicornio",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "foto": "../imagenes/Productos/Alcancia_Unicornio.JPG"
    },
    ];

let createTaskCard = (task) => {

  let card = document.createElement('div');
  card.className = 'col-6 col-sm-4 col-md-3 pt-5';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let imagen = document.createElement('img');
  imagen.src = task.foto;
  imagen.className = 'img-fluid img-thumbnail';

  let producto = document.createElement('p');
  producto.innerHTML = `<p>${task.title} <br> ${task.Precio} <br> ${task.Oferta} </p>`;

  cardBody.appendChild(imagen);
  cardBody.appendChild(producto);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);

}
let initListOfTasks = () => {
  if (cardContainer) {
    document.getElementById('card-container').replaceWith(cardContainer);
    return;
  }

  cardContainer = document.getElementById('card-container');
  tasks.forEach((task) => {
    createTaskCard(task);
  });
};

