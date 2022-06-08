let items = [
    {
        "Producto" : "Alcancia Minie Mouse",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "Foto": "../imagenes/Productos/Alcancia_Minie.JPG",
        "Tipo": "Alcancia"
    },
    {
        "Producto" : "Alcancia Unicornio",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "Foto": "../imagenes/Productos/Alcancia_Unicornio.JPG",
        "Tipo": "Alcancia"
    },
    {
        "Producto" : "Alcancia Pequeña Lulú",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "Foto": "../imagenes/Productos/Alcancia_Lulu.JPG",
        "Tipo": "Alcancia"
    },
    {
        "Producto" : "Alcancia Increíble Hulk",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "Foto": "../imagenes/Productos/Alcancia_Hulk.JPG",
        "Tipo": "Alcancia"
    },
    {
        "Producto" : "Alcancia Dark Vader",
        "Precio": "Precio Regular: S/ 15",
        "Oferta": "Oferta: S/ 10",
        "Foto": "../imagenes/Productos/Alcancia_Darkvader.JPG",
        "Tipo": "Alcancia"
    },
    {
        "Producto" : "Lienzo Personalizado Pikachu",
        "Precio": "Precio Regular: S/ 10",
        "Oferta": "Oferta: S/ 8",
        "Foto": "../imagenes/Productos/Lienzo_Pikachu.JPG",
        "Tipo": "Lienzo"
    },
    {
        "Producto" : "Lienzo Personalizado Woody",
        "Precio": "Precio Regular: S/ 10",
        "Oferta": "Oferta: S/ 8",
        "Foto": "../imagenes/Productos/Lienzo_Woody.JPG",
        "Tipo": "Lienzo"
    },
    {
        "Producto" : "Lienzo Personalizado Nopo y Gonta",
        "Precio": "Precio Regular: S/ 10",
        "Oferta": "Oferta: S/ 8",
        "Foto": "../imagenes/Productos/Lienzo_Nopoygonta.JPG",
        "Tipo": "Lienzo"
    },
    {
        "Producto" : "Lienzo Personalizado Payasito",
        "Precio": "Precio Regular: S/ 10",
        "Oferta": "Oferta: S/ 8",
        "Foto": "../imagenes/Productos/Lienzo_Payasito.JPG",
        "Tipo": "Lienzo"
    },
    {
        "Producto" : "Lienzo Personalizado Llama",
        "Precio": "Precio Regular: S/ 10",
        "Oferta": "Oferta: S/ 8",
        "Foto": "../imagenes/Productos/Lienzo_Llama.JPG",
        "Tipo": "Lienzo"
    },
]


let cardContainer;

function createitemCard(item) {
  
  let card = document.createElement('div');
  card.innerHTML = '';

  card.className = 'col-6 col-sm-4 col-md-3 pt-5';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let imagen = document.createElement('img');
  imagen.src = item.Foto;
  imagen.className = 'img-fluid img-thumbnail';

  let producto = document.createElement('p');
  producto.innerHTML = `<p>${item.Producto} <br> ${item.Precio} <br> ${item.Oferta} </p>`;

  cardBody.appendChild(imagen);
  cardBody.appendChild(producto);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);

}


function initListOfitems(arrayitems) {

  cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML="";
  
  arrayitems.forEach((item) => {
    createitemCard(item);
  });
};

