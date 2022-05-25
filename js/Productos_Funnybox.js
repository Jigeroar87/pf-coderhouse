
/*
 * Clase que modela la entidad Productos_Funnybox
 */
class Productos_Funnybox {

    /*
     * Constructor
     * @param {*} modelo del auto
     * @param {*} marca del auto
     * @param {*} precio  del auto
     */
    constructor (nombre,precio,oferta){ 


        this.nombre = nombre;  /*modelo*/
        this.precio = precio ; /*marca*/
        this.oferta = oferta ; /*precio*/
        this.id = -1 ;

    }


    /*
     * Muestra la descripcion completa del auto     
     */

    mostrar_descripcion(){
        return (this.id + " - " +this.nombre + " - S/" + this.precio + " - S/" + this.oferta) ;
    }

    /*
     * Setea un nuevo id
     * @param {*} nuevo_id a setear
     */
    set_id(nuevo_id){
        this.id = nuevo_id;
    }

    
}