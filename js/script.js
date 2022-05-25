



let arreglo_autos = new Array();

let auto1 = new Auto ("fiat","uno",10000);
auto1.set_id(1);
let auto2 = new Auto ("peugeot","206",20000);
auto2.set_id(2);
let auto3 = new Auto ("Audi","A4",300000);
auto3.set_id(3);
arreglo_autos.push(auto1);
arreglo_autos.push(auto2);
arreglo_autos.push(auto3);



let gen_id = 1;
const hoy = new Date();
alert("Bienvenidos al sistema de compra venta\n"+hoy.toLocaleString());

let flag = true ;
while (flag) {

    let mensaje = "Indique lo que desea hacer: ";
    mensaje +=    "\n1) Cargar nuevo auto ";
    mensaje +=    "\n2) Eliminar auto ";
    mensaje +=    "\n3) Mostrar Autos en stock " ;
    mensaje +=    "\n4) Aplicar descuento " ;
    mensaje +=    "\n5) Salir " ;

    let resp = prompt (mensaje);

    switch (resp){

        case "1" : 
                ingresar_nuevo_auto();
                break;
        case "2" :          
                eliminar_auto();
                break;
        case "3" :
                mostrar_autos();
                break;
        case "4"  : 
                aplicar_descuento();
                break;
        case "5" : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;        
        case null : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;
        default : 
                alert ("No ingreso una opcion valida") ;                     


    }
}


function solicitar_datos_auto(){
    let check = true ;
    
    while (check){
        let msj = "";
        let marca = prompt("Ingrese marca").trim();
        let modelo = prompt ("ingrese modelo").trim();
        let precio = parseFloat(prompt ("Ingrese precio"));   

            if (!marca){

                msj += "\nDebe ingresar marca";

            }

            if (!modelo){

                msj += "\nDebe ingresar modelo" ;
            }

            if (isNaN(precio)){

                msj += "\nDebe ingresar un valor numerico en precio";

            }

            if (msj != ""){

                alert(msj);
                check = confirm("Desea cargar de nuevo los datos");
                

            }else{


                return new Auto (marca,modelo,precio);

            }


    }

    return false;


}

function ingresar_nuevo_auto (){

    let auto = solicitar_datos_auto();

    if (auto){

        
        auto.set_id(gen_id) ;
        gen_id ++;
        arreglo_autos.push(auto);
        alert("Auto agregado con exito!")

    }


}


function eliminar_auto(){

    if (existen_autos()) {

        mostrar_arreglo();

        let id_ingresado = prompt("Ingrese el id del auto a eliminar").trim();

        if (id_ingresado){

            let auto_encontrado = arreglo_autos.find((a)=> a.id == id_ingresado)
            
            if (auto_encontrado) {

                let resp = confirm("Esta seguro que desea eliminar el auto "+auto_encontrado.mostrar_descripcion() + " ?");
                if (resp){

                    arreglo_autos = arreglo_autos.filter((a) => a.id != id_ingresado ) ;

                    alert("Auto eliminado con exito");
                    

                }


            }



        }
    }



}

function mostrar_autos(){

    if (existen_autos()) {

        let resp = prompt("La info se mostrara ordenada por precio.\n Desea verla en forma Ascendente (A) o Desendente (D)").toUpperCase() ;
        if (resp == "A") {

            arreglo_autos.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return 1;
                }
                if (a.precio < b.precio) {
                    return -1;
                }
                
                return 0;
            })
        }

        if (resp == "D"){

            arreglo_autos.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return -1;
                }
                if (a.precio < b.precio) {
                    return 1;
                }
                
                return 0;
            })
        }

        mostrar_arreglo();
    
    }

}





function mostrar_arreglo(){
    let mensaje = "Los autos en stock son";  
    
    arreglo_autos.forEach( (auto)=> {
        mensaje += "\n " + auto.mostrar_descripcion();
    })

    alert(mensaje);    


}


function existen_autos(){

    if (arreglo_autos.length == 0){
        alert("No hay autos en stock");

        return false;

    }  

    return true;

}

function aplicar_descuento(){


    if (existen_autos) {
        let descuento = parseInt(prompt("Ingrese el descuento a aplicar"));
        
        if (!isNaN(descuento)){

            let desc = descuento / 100 ;

            const arreglo_aux = arreglo_autos.map((aut) => {
                return {
                    marca: aut.nombre,
                    modelo : aut.modelo ,
                    precio: aut.precio * desc
                }
            })        

            
        }

        mostrar_arreglo();
    }

}




                        

