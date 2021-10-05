'use strict'

var presupuesto = 0;


function actualizarPresupuesto(valor) {

    let val = valor;

    if (val >= 0) {
        presupuesto = val;

    }
    else {
        val = -1;
       console.log('Error. Presupuesto negativo');
    }

    return val;
}

function mostrarPresupuesto() {
    console.log(`Tu presupuesto actual es de ${presupuesto} €`)
}

function CrearGasto(val) {

    if (val < 0) {
        val = 0;
    }

    let gasto = {

        descripcion,
        valor = val,
        mostrarGasto() {
            console.log(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);
        }

        actualizarDescripcion(nuevaDescr) {
            this.descripcion = nuevaDescr;

        } 

        actualizarValor(nuevoValor) {

            if (nuevoValor > 0)
                this.valor = nuevoValor;


        }

    };

    return gasto;
}

/*function gasto(descr,val) {
    
    this.descripcion = descr;
    if (this.valor >=0)
    {
        this.valor = val;
    }
    else
    this.valor = 0;

}*/


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
