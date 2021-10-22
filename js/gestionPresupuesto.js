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

    return (`Tu presupuesto actual es de ${presupuesto} €`);

}

function CrearGasto(descr, val, fec = Date.now(), ...etiq) {

    let val_ = parseFloat(val);

    if (val_ < 0 || isNaN(val_)) {

        val_ = 0;
    }

    if (typeof fec === 'string') {
        if (isNaN(Date.parse(fec)))
            fec = Date.now();
        else
            fec = Date.parse(fec);
    }


    let gasto = {

        descripcion: descr,

        valor: val_,

        etiquetas: [...etiq],

        fecha: fec,

        mostrarGasto() {

            return (`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);

        },

        mostrarGastoCompleto() {
            let etis = '';
            let fechaLocal = new Date(this.fecha);
            for (let elem of this.etiquetas) {
                etis += '- ' + elem + '\n';
            }

            return (`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${fechaLocal.toLocaleString()}\nEtiquetas:\n${etis}`);
        },

        actualizarDescripcion(nuevaDes) {

            this.descripcion = nuevaDes;

        },

        actualizarValor(nuevoValor) {

            let value = parseFloat(nuevoValor);

            if (value >= 0) {
                this.valor = value;
            }

        },
        actualizarFecha(nuevaFecha) {
            if (!(Object.is(Date.parse(nuevaFecha), NaN))) {
                this.fecha = Date.parse(nuevaFecha);
            }


        },
        anyadirEtiquetas(...anyadirEtiquetas) {


            if (anyadirEtiquetas.length > 0) {
                this.etiquetas = [...this.etiquetas, ...anyadirEtiquetas];
                this.etiquetas = Array.from(new Set(this.etiquetas));


            }

        },
        borrarEtiquetas(...borrarEtiquetas) {
            for (let elemParam of borrarEtiquetas) {
                for (let i = 0; i < this.etiquetas.length; i++) {
                    if (elemParam === this.etiquetas[i]) {
                        this.etiquetas.splice(i, 1);
                    }
                }
            }
        },
        obtenerPeriodoAgrupacion(periodo) {
            let fec;
            fec = new Date(this.fecha);// convierte en objeto fecha
            let dia = String(fec.getDate()).padStart(2, '0');
            let mes = String(fec.getMonth() + 1).padStart(2, '0');
            let anyo = String(fec.getFullYear());
            let cadena = '';
            switch (periodo) {

                case 'dia': {//aaaa-mm-dd
                    cadena = `${anyo}-${mes}-${dia}`
                    break;
                }
                case 'mes': {//aaaa-mm
                    cadena = `${anyo}-${mes}`
                    break;
                }
                case 'anyo': {//aaaa
                    cadena = `${anyo}`
                    break;
                }
                default: {
                    //console.log("error");
                }
            };
            return cadena;
        }


    };

    if (etiq.length > 0) {

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

    for (let i = 0; i < gastos.length; i++) {
        if (gastos[i].id === id) {
            gastos.splice(i, 1);
        }
    }
}




function calcularTotalGastos() {

    let result = 0;

    for (let elem of gastos) {
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

function agruparGastos(periodo = 'mes', etiquetas = [], fechaDesd = '', fechaHast = '') {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    if ((isNaN(Date.parse(fechaDesd))) || (typeof fechaDesd === 'undefined') || (typeof fechaDesd !== 'string'))
       {
           fechaDesd = `${yyyy}-01-01`;
       }
       else
        fechaDesd = Date.parse(fechaDesd);
   
       if ((isNaN(Date.parse(fechaHast))) || (typeof fechaHast === 'undefined') || (typeof fechaHast !== 'string'))
       {
           fechaHast = `${yyyy}-${mm}-${dd}`
       }
       else
        fechaHast = Date.parse(fechaHast);

        if (typeof etiquetas === 'undefined')
        {
            etiquetas = [];
        }
        
        let subconjG = filtrarGastos({fechaDesde: fechaDesd, fechaHasta: fechaHast, etiquetasTiene: etiquetas});
        //console.log('SUBSUB\n' + subconjG.length);
/*Ejecutar reduce sobre el conjunto de gastos filtrados. El valor inicial del acumulador de reduce será un 
objeto vacío. Dentro del cuerpo de la función de reduce, para cada gasto se obtendrá su período de agrupación 
(a través del método obtenerPeriodoAgrupacion del gasto y el parámetro periodo), que se utilizará para 
identificar la propiedad del acumulador sobre la que se sumará su valor. Así, si periodo = mes, un gasto con 
fecha 2021-11-01 tendrá un período de agrupación 2021-11, por lo que su valor se sumará a acc["2021-11"] 
(siempre que la variable del acumulador haya recibido el nombre acc en la llamada a reduce). Tienes una pista 
sobre cómo proceder en la siguiente pregunta de Stack Overflow.
El resultado de reduce será el valor de vuelta de la función agruparGastos.
*/
let cad='';

for (let v of subconjG){

 cad = v.obtenerPeriodoAgrupacion(periodo);


 function(subconjG, cad) {
    return subconjG.reduce(function(acc, it) {

      (acc[it[cad]] = rv[it[cad]] || []).push(it);
      return acc;
    }, {});
  };
}

/*let value = subconjG.reduce(function(acc, item) {



    let cadena = item.obtenerPeriodoAgrupacion(periodo);
    if (!acc.hasOwnProperty(cadena))
     acc[cadena] = item.valor;
     else
     {
    for (let [clave, val] of Object.entries(acc)) {
       if (clave === cadena)
         acc[cadena] = val + item.valor;

    }
    item.push(acc);
}
  }, {});*/

  //return value;
return groupBy;
}


function filtrarGastos(objeto) {

    let fechaD, fechaH, fD, fH;
    let vmin, vmax, dsc, etz;
    let gastosFiltrados = [] ;

    fD=Date.parse(objeto.fechaDesde);
    fH=Date.parse(objeto.fechaHasta);
    if (objeto.hasOwnProperty('fechaDesde')) {
        if (typeof objeto.fechaDesde === 'string') {
            if (!isNaN(fD)) {
                fechaD = fD;
            }
        }
    }

    if (objeto.hasOwnProperty('fechaHasta')) {
        if (typeof objeto.fechaHasta === 'string')
            if (!isNaN(fH))
                fechaH = fH;
    }

    if (objeto.hasOwnProperty('valorMinimo')) {
        vmin = objeto.valorMinimo;
    }

    if (objeto.hasOwnProperty('valorMaximo')) {
        vmax = objeto.valorMaximo;
    }

    if (objeto.hasOwnProperty('descripcionContiene')) {
        dsc = objeto.descripcionContiene;
    }

    if (objeto.hasOwnProperty('etiquetasTiene')) {

        etz = [...objeto.etiquetasTiene];
    }    

        gastosFiltrados = gastos.filter(function (item) {

            let devuelve = true;
            let latiene = false;

            if ((typeof fechaD !== 'undefined') && (item.fecha < fechaD)){
                devuelve = false;
            }

            if ((typeof fechaH !== 'undefined') && (item.fecha > fechaH)) {
                devuelve = false;
            }

            if ((typeof vmin !== 'undefined') && (item.valor < vmin))
                devuelve = false;

            if ((typeof vmax !== 'undefined') && (item.valor > vmax))
                devuelve = false;

            if ((typeof dsc !== 'undefined') && (!item.descripcion.includes(dsc)))
                  devuelve = false;

            if ((typeof etz !== 'undefined'))
            {    
            for (let it of etz)
                for (let ot of item.etiquetas)
                  if(it === ot)
                      latiene ||= true;
            }
            else {latiene = true;}

            
            return devuelve && latiene;

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

