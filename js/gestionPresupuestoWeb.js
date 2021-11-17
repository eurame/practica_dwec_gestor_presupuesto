import * as gestionPresupuesto from './gestionPresupuesto.js'

'use strict';

function mostrarDatoEnId(idElemento, valor) {
let elemento = document.getElementById(idElemento);
let p = document.createElement('p');

p.textContent = valor;
elemento.append(p);
}

/*function mostrarGastoWeb(idElemento, gastos){

    let elemento = document.getElementById(idElemento);

    for (let gasto of gastos)
    {
        let datos = '';
    for (let et of gasto.etiquetas){
        
        datos += `
                     <span class="gasto-etiquetas-etiqueta">
                     ${et}
                     </span>
        `;
    }

    elemento.innerHTML +=
    `<div class="gasto">
        <div class="gasto-descripcion">${gasto.descripcion}</div>
        <div class="gasto-fecha">${gasto.fecha}</div> 
        <div class="gasto-valor">${gasto.valor}</div> 
        <div class="gasto-etiquetas">
        ${datos}
        </div>`;
    }   
}*/     

function mostrarGastoWeb(idElemento, gasto){

    let elemento = document.getElementById(idElemento);

    let datos = '';
    
    for (let et of gasto.etiquetas){
        
        datos += `
                     <span class="gasto-etiquetas-etiqueta">
                     ${et}
                     </span>
        `;
    }

    elemento.innerHTML += 
    `<div class="gasto">
        <div class="gasto-descripcion">${gasto.descripcion}</div>
        <div class="gasto-fecha">${gasto.fecha}</div> 
        <div class="gasto-valor">${gasto.valor}</div> 
        <div class="gasto-etiquetas">
        ${datos}
        </div>`;

} 

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){

    let elemento = document.getElementById(idElemento);
    let datos = ""

    for (let [key ,value] of Object.entries(agrup))
    {
        datos += `
        <div class="agrupacion-dato">
        <span class="agrupacion-dato-clave">${key}</span>
        <span class="agrupacion-dato-valor">${value}</span>
      </div>
        `
    };

                    elemento.innerHTML +=  `
                    <div class="agrupacion">
                    <h1>Gastos agrupados por ${periodo}</h1>
                    ${datos}
                     </div>
                    `;
    
}

/*
Mostrar el presupuesto en div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
Borrar el contenido de div#listado-gastos-completo, para que el paso siguiente no duplique la información. Puedes utilizar innerHTML para borrar el contenido de dicha capa.
Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
*/


function repintar(){

    let actualPres = gestionPresupuesto.mostrarPresupuesto();
    gestionPresupuestoWeb.mostrarDatoEnId('presupuesto',actualPres);

    let gTupd = gestionPresupuesto.calcularTotalGastos();
    gestionPresupuestoWeb.mostrarDatoEnId("gastos-totales",gTupd);

    let bTupd = gestionPresupuesto.calcularBalance();
    gestionPresupuestoWeb.mostrarDatoEnId("balance-total",bTupd);

    let listGasBorra = document.getElementById('listado-gastos-completo');
    listGasBorra.innerHTML='';

    let listadoG = gestionPresupuesto.listarGastos();
    for (let a of listadoG)
    gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-completo", a);
}

function actualizarPresupuestoWeb(){

}

function nuevoGastoWeb(){

}

function EditarHandle(){

}

function BorrarHandle(){


}

function BorrarEtiquetasHandle(){

    
}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar,
    actualizarPresupuestoWeb,
    nuevoGastoWeb,
    EditarHandle,
    BorrarHandle,
    BorrarEtiquetasHandle

}
