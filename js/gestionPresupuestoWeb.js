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



export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}
