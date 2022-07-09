
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
        arrayitems = items_fetch.filter((elemento) => {
            return elemento.Tipo.toUpperCase() === inputValue;
        })
    }else{
        arrayitems = items_fetch;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayitems));
    
    initListOfitems(arrayitems);

    /*botones internos*/ 

    function mostrar_mensaje(titulo,mensaje,rutaimagen){
    
        Swal.fire({
        title: titulo,
        text: mensaje,
        imageUrl: rutaimagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        })
    
    }
    
    
    let boton1 = document.getElementById("1");
    
    try {
        boton1.addEventListener("click",(event)=>{
    
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=1 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 1 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })    
    } catch (error) {
        
    }
    
    try {
        let boton2 = document.getElementById("2");
    
        boton2.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=2 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 2 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })    
    } catch (error) {
        
    }
    
    
    try {
        let boton3 = document.getElementById("3");
    
        boton3.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=3 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 3 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })    
    } catch (error) {
        
    }
    
    
    try {
        let boton4 = document.getElementById("4");
    
        boton4.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=4 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 4 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })
            
    } catch (error) {
        
    }
    
    try {
        let boton5 = document.getElementById("5");
    
        boton5.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=5 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 5 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })
            
    } catch (error) {
        
    }
    
    
    try {
        let boton6 = document.getElementById("6");
    
    boton6.addEventListener("click",(event)=>{
    
    
        mostrar_mensaje("Próximamente","Carrito de compras para producto ID=6 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
    
        Toastify({
            text: "Producto 6 Agregado",
            duration: 3000,
            position: 'right',
            gravity: 'top'
        }).showToast();
    
    })
    } catch (error) {
        
    }

    
    
    try {
        let boton7 = document.getElementById("7");
    
        boton7.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=7 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 7 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })        
    } catch (error) {
        
    }


    try {
        let boton8 = document.getElementById("8");
    
        boton8.addEventListener("click",(event)=>{
        
        
            mostrar_mensaje("Próximamente","Carrito de compras para producto ID=8 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
        
            Toastify({
                text: "Producto 8 Agregado",
                duration: 3000,
                position: 'right',
                gravity: 'top'
            }).showToast();
        
        })
            
    } catch (error) {
        
    }
    
    
try {
    let boton9 = document.getElementById("9");
    
    boton9.addEventListener("click",(event)=>{
    
    
        mostrar_mensaje("Próximamente","Carrito de compras para producto ID=9 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
    
        Toastify({
            text: "Producto 9 Agregado",
            duration: 3000,
            position: 'right',
            gravity: 'top'
        }).showToast();
    
    })
    
} catch (error) {
    
}
    
try {
    let boton10 = document.getElementById("10");
    
    boton10.addEventListener("click",(event)=>{
    
    
        mostrar_mensaje("Próximamente","Carrito de compras para producto ID=10 | Mira a la esquina superior derecha","../imagenes/cart.jpeg");
    
        Toastify({
            text: "Producto 10 Agregado",
            duration: 3000,
            position: 'right',
            gravity: 'top'
        }).showToast();
    
    })
    
} catch (error) {
    
}    
    
    
    
    

    /*botones internos*/ 
    
}




