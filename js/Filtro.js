
let arrayitems;

let storage = JSON.parse(localStorage.getItem("filtro"));

if(storage){
    arrayitems = storage;
}
else{
    arrayitems=items_fetch;
}

initListOfitems(arrayitems);

const inputRadio = document.getElementsByClassName("radio");

for(const input of inputRadio){
    input.addEventListener("change", filtrarTabla)
}


function filtrarTabla(evento){
    let inputValue = evento.target.value.toUpperCase();
    
    if(inputValue != "TODOS"){
        arrayitems = items.filter((elemento) => {
            return elemento.Tipo.toUpperCase() === inputValue;
        })
    }else{
        arrayitems = items_fetch;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayitems));
    
    initListOfitems(arrayitems);
}


