
/**
 * Clase que modela la entidad auto
 */
class Auto {

    /**
     * Constructor
     * @param {*} modelo del auto
     * @param {*} marca del auto
     * @param {*} precio  del auto
     */
    constructor (modelo,marca,precio){


        this.modelo = modelo;
        this.marca = marca ;
        this.precio = precio ;
        this.id = -1 ;

    }


    /**
     * Muestra la descripcion completa del auto     
     */
    mostrar_descripcion(){


        return (this.id + " - " +this.modelo + " - " + this.marca + " - $" + this.precio) ;


    }

    /**
     * Setea un nuevo id
     * @param {*} nuevo_id a setear
     */
    set_id(nuevo_id){

        this.id = nuevo_id;
    }

    
}