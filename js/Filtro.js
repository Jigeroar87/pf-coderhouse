let arrayitems;

let storage = JSON.parse(localStorage.getItem("filtro"));

if(storage){
    arrayitems = storage;
}
else{
    arrayitems=items;
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
        arrayitems = items;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayitems));
    
    initListOfitems(arrayitems);
}


