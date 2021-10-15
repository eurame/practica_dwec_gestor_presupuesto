'use strict'

var presupuesto = 0;
var gastos = [];
var idGasto = 0;
function actualizarPresupuesto(valor) {

    let val = parseFloat(valor);

    if (val >= 0) {

        presupuesto = val;

    }

    else {
       console.log('Error. Presupuesto negativo');
       val = -1;

    }

    return val;
}

function mostrarPresupuesto() {

    return(`Tu presupuesto actual es de ${presupuesto} €`);

}

function CrearGasto(descr, val, fec = Date.now(), ...etiq) {

    let val_ = parseFloat(val);

    if (val_ < 0 || isNaN(val_)) {

        val_ = 0;
    }
    

    let gasto = {

	descripcion: descr,

        valor : val_,

        etiquetas: [...etiq],

        fecha: (typeof fec === 'string') ? Date.parse(fec) : fec,

        mostrarGasto() {
           
            return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);

        },

        mostrarGastoCompleto() {
            let etis='';
            let fechaLocal = new Date(this.fecha);
            for (let elem of this.etiquetas){
                etis += '- ' + elem + '\n';
            }

            return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${fechaLocal.toLocaleDateString()} ${fechaLocal.toLocaleTimeString()},\nEtiquetas:\n${etis}`);

        },

        actualizarDescripcion(nuevaDes) {

            this.descripcion = nuevaDes;

        },

        actualizarValor(nuevoValor) {

            let value = parseFloat(nuevoValor);

            if (value >= 0)
            {
                this.valor = value;
            }

        },
        actualizarFecha(nuevaFecha){
            if (!(Object.is(Date.parse(nuevaFecha),NaN)))
             {
                this.fecha = Date.parse(nuevaFecha);
            }


        },
        anyadirEtiquetas(...anyadirEtiquetas){
            

            if (anyadirEtiquetas.length > 0)
            {
               this.etiquetas = [...this.etiquetas,...anyadirEtiquetas];
               this.etiquetas = Array.from(new Set(this.etiquetas));

            
            }
            
        },
        borrarEtiquetas(...borrarEtiquetas){
            for (let elemParam of borrarEtiquetas){
                for (let i=0; i<this.etiquetas.length; i++){
                    if (elemParam === this.etiquetas[i])
                    {
                         this.etiquetas.splice(i,1);
                    }
                }
            }
        }

    };

    if (etiq.length > 0)
    {

    }
    return gasto;
}

function listarGastos() {
    
    return gastos;

}

function anyadirGasto(nuevoGasto) {
    nuevoGasto.id = idGasto;
    idGasto++;
    gastos.push(nuevoGasto);

    

}

function borrarGasto(id) {
   
        for (let i=0; i<gastos.length; i++){
            if (gastos[i].id === id)
            {
                 gastos.splice(i,1);
            }
        }
    }
    



function calcularTotalGastos() {

    let result = 0;

for (let elem of gastos){
    result = result + elem.valor;
}


return result;
    

}

function calcularBalance() {
    
    let result = 0;
    let totalGastos = calcularTotalGastos();

    result = presupuesto - totalGastos;

    return result;

}
/*let gasto3 = new CrearGasto("Gasto 3", 23.55, "2021-10-06T13:10Z" );
console.log(gasto3.fecha);*/
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance

}
