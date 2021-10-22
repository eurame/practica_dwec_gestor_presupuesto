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
    
    if (typeof fec === 'string')
    {
        if (isNaN(Date.parse(fec)))
          fec = Date.now();
        else
        fec = Date.parse(fec);
    }
    

    let gasto = {

	descripcion: descr,

        valor : val_,

        etiquetas: [...etiq],

        fecha: fec,

        mostrarGasto() {
           
            return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);

        },

        mostrarGastoCompleto() {
            let etis='';
            let fechaLocal = new Date(this.fecha);
            for (let elem of this.etiquetas){
                etis += '- ' + elem + '\n';
            }

            return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${fechaLocal.toLocaleString()}\nEtiquetas:\n${etis}`);
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
        },
        obtenerPeriodoAgrupacion(periodo){
            let fec;
            fec = new Date(this.fecha);// convierte en objeto fecha
           
            let cadena = '';
            switch (periodo) {

                case 'dia':{//aaaa-mm-dd
                    let mes = fec.getMonth()<10 ? `0${fec.getMonth()+1}` : `${fec.getMonth()+1}`;
                    let dia = fec.getDate()<10 ? `0${fec.getDate()}` : `${fec.getDate()}`;
                        cadena = '' + fec.getFullYear() + '-' + mes + '-' + dia;
                        break;
                }
                case 'mes':{//aaaa-mm
                    let mes = fec.getMonth()<10 ? `0${fec.getMonth()+1}` : `${fec.getMonth()+1}`;
                    cadena = `${fec.getFullYear()}-` + mes;
                    break;
                }
                case 'anyo':{//aaaa
                    cadena = '' + fec.getFullYear();
                    break;
                }
                default:{
                    //console.log("error");
                }
            };
            return cadena;
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

function agruparGastos(periodo, etiquetas = [], fechaDesde, fechaHasta) {

    if ((periodo !== 'dia') || (periodo !== 'mes') || (periodo !== 'anyo'))
        periodo = 'mes';

    if (isNaN(Date.parse(fechaDesde)))
    {
        fechaDesde = new Date("1/1/" + (new Date()).getFullYear());
    }
    else
     fechaDesde = Date.parse(fechaDesde);

    if (isNaN(Date.parse(fechaHasta)))
    {
        fechaHasta = new Date.now();
    }
    else
     fechaHasta = Date.parse(fechaHasta);
}

function filtrarGastos(objeto) {

    let fechaD, fechaH;
    let vmin, vmax, dsc, et;

if ('fechaDesde' in objeto) 
    if (typeof objeto.fechaDesde === 'string') 
        if (!isNaN(Date.parse(objeto.fechaDesde))){
            fechaD = new Date(objeto.fechaDesde);
            fechaD = fechaD.toLocaleString();
        }
    

if ('fechaHasta' in objeto) 
    if (typeof objeto.fechaHasta === 'string') 
        if (!isNaN(Date.parse(objeto.fechaHasta)))
        {
            fechaH = new Date(objeto.fechaHasta);
            fechaH = fechaH.toLocaleString();
        }
            
if ('valorMinimo' in objeto){
    vmin = objeto.valorMinimo
}
if ('valorMaximo' in objeto){
    vmax = objeto.valorMaximo
}

if ('descripcionContiene' in objeto){
 dsc = String(objeto.descripcionContiene);
}

if ('etiquetasTiene' in objeto) {
    et = [ ...objeto.etiquetasTiene ];
}

//fechaD, fechaH, vmin, vmax, dsc, et ;


let gastosFiltrados = gastos.filter(function(item){
     
    let devuelve = true, cont = false;
    let fechaObj = new Date(item.fecha);

    if (fechaD !== undefined)
    console.log("--FOBJ: "+fechaObj);
    console.log("--FDSD: "+fechaD);
    if (fechaObj < fechaD) 
       devuelve = false;
     
    
    if (fechaH !== undefined)
    console.log("--FOBJ: "+fechaObj);
    console.log("--FHST: "+fechaH);
    if (fechaObj > fechaH)
       devuelve = false;

    if (vmin !== undefined)
    if (item.valor < vmin)
        devuelve = false;
    
    if (vmax !== undefined)
    if (item.valor > vmax)
        devuelve = false;
    
    if (dsc != undefined)
    if (!item.descripcion.includes(dsc))
        devuelve = false;
    
    if (et !== undefined)
    for (let z of et)
    {
        console.log('z= ' +z)
        if (item.etiquetas.includes(z));
        cont = true;
    }
    if (Object.entries(objeto).length === 0)
       devuelve = cont = true;

    return (devuelve && cont);

});
return gastosFiltrados;
}


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
    calcularBalance,
    agruparGastos,
    filtrarGastos

}

