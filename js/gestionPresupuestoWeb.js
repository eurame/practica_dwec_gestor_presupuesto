import { agruparGastos } from "./gestionPresupuesto";

function mostrarDatoEnId (idElemento, valor){
    let elem = document.getElementById('idElemento');
    elem.textContent(valor);
}


function mostrarGastoWeb (idElemento, gasto){
    let elem = document.getElementById('idElemento');

   elem.innerHTML=` <div class="gasto">
  <div class="gasto.descripcion">DESCRIPCIÓN DEL GASTO</div>
  <div class="gasto.fecha">FECHA DEL GASTO</div> 
  <div class="gasto.valor">VALOR DEL GASTO</div> 
  <div class="gasto.etiquetas">
    <span class="gasto-etiquetas-etiqueta">
      ETIQUETA 1
    </span>
    <span class="gasto-etiquetas-etiqueta">
      ETIQUETA 2
    </span>
    <!-- Etcétera -->
  </div> 
</div>`

}

function mostrarGastosAgrupadosWeb (idElemento, agrup, periodo){
    
    let elem = document.getElementById('idElemento');

    let agrupacion = agruparGastos(periodo);

    for (let clave in agrupacion)
    {
    elem.innerHTML=`<div class="agrupacion">
    <!-- PERIODO será "mes", "día" o "año" en función de si el parámetro
         de la función es "mes", "dia" o "anyo" respectivamente -->
    <h1>Gastos agrupados por PERIODO</h1>
  
    <!-- Se deberá crear un div.agrupacion-dato para cada propiedad del objeto agrup:
         https://es.javascript.info/keys-values-entries#object-keys-values-entries -->
    <div class="agrupacion-dato">
      <span class="agrupacion-dato-clave">clave</span>
      <span class="agrupacion-dato-valor">agrupacion[clave]</span>
    </div>
  
  </div>
    }
`
}





export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}

/*
//Para iterar sobre un collection del node usar for...of


function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    let p = document.createElement("p");
    p.textContent = valor;
    elemento.appendChild(p);
}

//aqui gasto es un array, con lo que habria que cambiarlo y meterlo todo dentro de una iteracción
function mostrarGastoWeb(idElemento, gastos) {
    let elemento = document.getElementById(idElemento);
    for (let gasto of gastos) {
        let data = "";
        for (let i of gasto.etiquetas) {
            data += `
            <span class="gasto-etiquetas-etiqueta">
                ${i}
            </span>`
        }
        elemento.innerHTML += 
        `<div class="gasto">
            <div class="gasto-descripcion">${gasto.descripcion}</div>
            <div class="gasto-fecha">${gasto.fecha}</div> 
            <div class="gasto-valor">${gasto.valor}</div> 
            <div class="gasto-etiquetas">
            ${data}`;
        // elemento.innerHTML += span.innerHTML + "</div>";
    }
}

///aqui gasto es un array, con lo que habria que cambiarlo y meterlo todo dentro de una iteracción
// function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
//     const elemento = document.getElementById(idElemento);
//     let data = ""
//     for (let [key, value] of Object.entries(agrup)) {
//         data += `<div class="agrupacion-dato">
//         <span class="agrupacion-dato-clave">${key}</span>
//         <span class="agrupacion-dato-valor">${value}</span>
//         </div>`
//     };
//     elemento.innerHTML += 
//     `
//     <div class="agrupacion">
//         <h1>Gastos agrupados por ${periodo}</h1>
//         ${data}
//     `
// }

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    const elemento = document.getElementById(idElemento);
    let data = ""
    for (let [key, value] of Object.entries(agrup)) {
        data += `
        <div class="agrupacion-dato">
            <span class="agrupacion-dato-clave">${key}</span>
            <span class="agrupacion-dato-valor">${value}</span>
        </div>`
    };
    elemento.innerHTML += 
    `
    <div class="agrupacion">
        <h1>Gastos agrupados por ${periodo}</h1>
        ${data}
    `
}

export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}

*/