
let items_fetch=[];

fetch('../js/Producto.json')
.then( (resp) => resp.json() )
.then( (data) => {
    console.log(data);
    items_fetch=data;
})


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

  let boton = document.createElement('button'); 
  boton.innerHTML='';
  boton.className = "btn btn-outline-dark btn-lg agregar-carrito";
  boton.innerHTML = `<a ID=${item.ID}>Comprar</a>`;

  cardBody.appendChild(imagen);
  cardBody.appendChild(producto);
  cardBody.appendChild(boton);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);

}


function initListOfitems(array) {

  cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML="";
  
  array.forEach((item) => {
    createitemCard(item);
  });
};

