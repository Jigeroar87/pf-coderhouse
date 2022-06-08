
let cardContainer;

function createitemCard(item) {

  let card = document.createElement('div');
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
function initListOfitems() {
  if (cardContainer) {
    document.getElementById('card-container').replaceWith(cardContainer);
    return;
  }

  cardContainer = document.getElementById('card-container');
  items.forEach((item) => {
    createitemCard(item);
  });
};


let arrayitems = items;

const storage = JSON.parse(localStorage.getItem("filtro"));

if(storage){
    arrayitems = storage;
}

const inputRadio = document.getElementsByClassName("radio");

for(const input of inputRadio){
    input.addEventListener("change", filtrarTabla)
}


function filtrarTabla(evento){
    let inputValue = evento.target.value.toUpperCase();
    
    if(inputValue != "TODOS"){
        arrayitems = items.filter((elemento) => {
            return elemento.tipo.toUpperCase() === inputValue;
        })
    }else{
        arrayitems = items;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayitems));

    createitemCard(arrayitems);

}

