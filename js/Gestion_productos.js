
    document.getElementById("boton").onclick = function (){
                    
        let arreglo_producto = new Array();

        let producto1 = new Productos_Funnybox(
                        "Alcancia Minie Mouse",15,10);
        producto1.set_id(1);
        
        let producto2 = new Productos_Funnybox(
                        "Alcancia Unicornio",15,10);
        producto2.set_id(2);

        let producto3 = new Productos_Funnybox(
                        "Lienzo Personalizado Pikachu",10,8);
        producto3.set_id(3);

        let producto4 = new Productos_Funnybox(
                        "Lienzo Personalizado Woody",10,8);
        producto4.set_id(4);

        arreglo_producto.push(producto1);
        arreglo_producto.push(producto2);
        arreglo_producto.push(producto3);
        arreglo_producto.push(producto4);



        let gen_id = 5;
        const hoy = new Date();
        alert("Bienvenidos a Gestionar Productos FunnyBox\n"+hoy.toLocaleString());

        let flag = true ;
        while (flag) {

            let mensaje = "Ud. puede realizar las siguientes acciones: ";
            mensaje +=    "\n1) Agregar producto ";
            mensaje +=    "\n2) Eliminar producto ";
            mensaje +=    "\n3) Mostrar productos en stock " ;
            mensaje +=    "\n4) Salir" ;

            let resp = prompt (mensaje);

            switch (resp){

                case "1" : 
                        ingresar_nuevo_producto();
                        break;
                case "2" :          
                        eliminar_producto();
                        break;
                case "3" :
                        mostrar_producto();
                        break;
                case "4" : 
                        alert("Gracias por utilizar Gestor de productos Funnybox :) ");
                        flag=false;
                        break;        
                case null : 
                        alert("Gracias por utilizar Gestor de productos Funnybox :) ");
                        flag=false;
                        break;
                default : 
                        alert ("No ingresó una opción valida") ;                     


            }
        }


        function solicitar_datos_producto(){
            let check = true ;
            
            while (check){
                let msj = "";
                let nombre = prompt("Ingrese nombre").trim();
                let precio = parseFloat(prompt ("Ingrese precio"));
                let oferta = parseFloat(prompt ("Ingrese oferta"));   

                    if (!nombre){

                        msj += "\nDebe ingresar nombre";

                    }

                    if (isNaN(precio)){

                        msj += "\nDebe ingresar un valor numérico en precio";
                    }

                    if (isNaN(oferta)){

                        msj += "\nDebe ingresar un valor numérico en oferta";

                    }

                    if (msj != ""){

                        alert(msj);
                        check = confirm("Desea cargar de nuevo los datos");
                        

                    }else{


                        return new Productos_Funnybox (nombre,precio,oferta);

                    }


            }

            return false;


        }

        function ingresar_nuevo_producto (){

            let producto = solicitar_datos_producto();

            if (producto){

                
                producto.set_id(gen_id) ;
                gen_id ++;
                arreglo_producto.push(producto);
                alert("Producto agregado con éxito!")

            }


        }


        function eliminar_producto(){

            if (existe_producto()) {

                mostrar_arreglo();

                let id_ingresado = prompt("Ingrese el id del producto a eliminar").trim();

                if (id_ingresado){

                    let producto_encontrado = arreglo_producto.find((a)=> a.id == id_ingresado)
                    
                    if (producto_encontrado) {

                        let resp = confirm("Esta seguro que desea eliminar el producto "+producto_encontrado.mostrar_descripcion() + " ?");
                        if (resp){

                            arreglo_producto = arreglo_producto.filter((a) => a.id != id_ingresado ) ;

                            alert("Producto eliminado con éxito");
                            

                        }


                    }else{
                        alert("Ingrese id correcto");
                    }



                }
            }



        }

        function mostrar_producto(){

            if (existe_producto()) {

                let resp = prompt("La info se mostrara ordenada por precio.\n Desea verla en forma Ascendente (A) o Desendente (D)").toUpperCase() ;
                if (resp == "A") {

                    arreglo_producto.sort((a,b) =>{
                        
                        if (a.precio > b.precio) {
                            return 1;
                        }
                        if (a.precio < b.precio) {
                            return -1;
                        }
                        
                        return 0;
                    })

                    mostrar_arreglo();

                }

                else if (resp == "D"){

                    arreglo_producto.sort((a,b) =>{
                        
                        if (a.precio > b.precio) {
                            return -1;
                        }
                        if (a.precio < b.precio) {
                            return 1;
                        }
                        
                        return 0;
                    })

                    mostrar_arreglo();
                }

                else {
                    alert("Ingrese valor adecuado para ordenamiento");
                }


                
            
            }

        }





        function mostrar_arreglo(){
            let mensaje = "Los productos en stock son";  
            
            arreglo_producto.forEach( (producto)=> {
                mensaje += "\n " + producto.mostrar_descripcion();
            })

            alert(mensaje);    


        }


        function existe_producto(){

            if (arreglo_producto.length == 0){
                alert("No hay productos en stock");

                return false;

            }  

            return true;

        }


    }

