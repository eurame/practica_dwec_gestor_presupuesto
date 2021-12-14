import * as gestionPresupuesto from './gestionPresupuesto.js'

'use strict';

function mostrarDatoEnId(idElemento, valor) {

let elemento = document.getElementById(idElemento);
let p = document.createElement('p');

p.textContent = valor;
switch (idElemento){
    case 'presupuesto':{
        elemento.innerHTML += `<h3>PRESUPUESTO</h3>`;
        break;
    }
    case 'gastos-totales':{
        elemento.innerHTML += `<h3>GASTOS TOTALES</h3>`;
        break;
    }
    case 'balance-total':{
        elemento.innerHTML += `<h3>BALANCE TOTAL</h3>`;
        break;
    }
};

elemento.append(p);
}

   

function mostrarGastoWeb(idElemento, gasto) {

    let elemento = document.getElementById(idElemento);

    if (!elemento.innerHTML.includes('<h3>LISTADO COMPLETO</h3>') && idElemento === 'listado-gastos-completo')
        elemento.innerHTML += '<h3>LISTADO COMPLETO</h3>';
    if (!elemento.innerHTML.includes('<h3>FILTRADO 1</h3>') && idElemento === 'listado-gastos-filtrado-1')
        elemento.innerHTML += '<h3>FILTRADO 1</h3>';
    if (!elemento.innerHTML.includes('<h3>FILTRADO 2</h3>') && idElemento === 'listado-gastos-filtrado-2')
        elemento.innerHTML += '<h3>FILTRADO 2</h3>';
    if (!elemento.innerHTML.includes('<h3>FILTRADO 3</h3>') && idElemento === 'listado-gastos-filtrado-3')
        elemento.innerHTML += '<h3>FILTRADO 3</h3>';
    if (!elemento.innerHTML.includes('<h3>FILTRADO 4</h3>') && idElemento === 'listado-gastos-filtrado-4')
        elemento.innerHTML += '<h3>FILTRADO 4</h3>';


    
    let divG = document.createElement('div');
    divG.className += 'gasto'

   if (idElemento === 'listado-gastos-completo')
        divG.id += `${gasto.id}`;
    

    let divGD = document.createElement('div');
    divGD.className += 'gasto-descripcion';
    divGD.innerText = gasto.descripcion;
    
    let divGF = document.createElement('div');
    divGF.className += 'gasto-fecha';
    divGF.innerText = gasto.fecha;
   
    let divGV = document.createElement('div');
    divGV.className += 'gasto-valor';
    divGV.innerText = gasto.valor;
    
    let divGE = document.createElement('div');
    divGE.className += 'gasto-etiquetas';
    divGE.id += `e${gasto.id}`;
    
    
    for (let et of gasto.etiquetas) {
        let objBorraEtik = new BorrarEtiquetasHandle();
        objBorraEtik.gasto = gasto;
        let gEtiq = document.createElement('span');
        gEtiq.className += 'gasto-etiquetas-etiqueta';
        gEtiq.innerText += et+' ';
        objBorraEtik.etiqueta = et;
        gEtiq.addEventListener('click',objBorraEtik);
        divGE.append(gEtiq);
    }
 
    let salto = document.createElement('br');
    divGE.append(salto);

    divG.append(divGD,divGF,divGV,divGE);

    elemento.append(divG);

    let buttonE = document.createElement("button");
    buttonE.className += 'gasto-editar';
    buttonE.textContent = "Editar";
    buttonE.type = 'button';

    let buttonB = document.createElement("button");
    buttonB.className += 'gasto-borrar';
    buttonB.textContent = 'Borrar';
    buttonB.type = 'button';
    
    let objAGF = new EditarHandleFormulario();
    objAGF.gasto = gasto;

    let nM = new EditarHandle();
    nM.gasto = gasto;
    let bM = new BorrarHandle();
    bM.gasto = gasto;
    
    let buttonAGF = document.createElement('button');
    buttonAGF.className = 'gasto-editar-formulario';
    buttonAGF.type = 'button';
    buttonAGF.textContent = 'Editar (formulario)';


    buttonE.addEventListener('click', nM);
    buttonB.addEventListener('click', bM);
    buttonAGF.addEventListener('click',objAGF);
    //divGE.addEventListener('click',objBorraEtik);


    let gs = document.querySelector(`.gasto #e${CSS.escape(gasto.id)}`);
 //   console.log(JSON.stringify(gs));
    let retorno = document.createElement('br');
    
        if (idElemento === 'listado-gastos-completo') {

            gs.append(buttonE);
            gs.append(buttonB);
            gs.append(buttonAGF);
        }
        elemento.append(retorno);

    

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

function repintar() {
    //Presupuesto
    document.getElementById('presupuesto').innerHTML='';
    let mostPresupuesto = gestionPresupuesto.mostrarPresupuesto();
    mostrarDatoEnId('presupuesto', mostPresupuesto);

    //Total de gastos
    document.getElementById('gastos-totales').innerHTML='';
    let calcularTGastos = gestionPresupuesto.calcularTotalGastos().toFixed(2);;
    mostrarDatoEnId("gastos-totales", calcularTGastos);

    //Balance actual
    document.getElementById('balance-total').innerHTML='';
    let calcularBalance = gestionPresupuesto.calcularBalance();
    mostrarDatoEnId("balance-total", calcularBalance);

    //Borrar div#listado-gastos-completo | Listado con los gastos y sus datos
    document.getElementById("listado-gastos-completo").innerHTML = "";
    let listaGastos = gestionPresupuesto.listarGastos();
    for (let k of listaGastos)
        mostrarGastoWeb("listado-gastos-completo", k);
    
  /*  //Borrar div#listado-gastos-filtrado-1 QUITADO PORQUE DA ERROR DE QUE GASTO SIN METODO OBTENERPERIODOAGRUPACION
    document.getElementById("listado-gastos-filtrado-1").innerHTML = "";
    let filtrador1 = { fechaDesde: "2021-09-01", fechaHasta: "2021-09-30" }
    let gastosFiltrados1 = gestionPresupuesto.filtrarGastos(filtrador1);
    for (let k of gastosFiltrados1)
        mostrarGastoWeb("listado-gastos-filtrado-1", k);

    document.getElementById("listado-gastos-filtrado-2").innerHTML = "";
    let filtrador2 = { valorMinimo: 50 }
    let gastosFiltrados2 = gestionPresupuesto.filtrarGastos(filtrador2);
    for (let k of gastosFiltrados2)
        mostrarGastoWeb("listado-gastos-filtrado-2", k);

    document.getElementById("listado-gastos-filtrado-3").innerHTML = "";
    let filtrador3 = { valorMinimo: 200, etiquetasTiene: ["seguros", ""] }
    let gastosFiltrados3 = gestionPresupuesto.filtrarGastos(filtrador3);
    for (let k of gastosFiltrados3)
        mostrarGastoWeb("listado-gastos-filtrado-3", k);

    document.getElementById("listado-gastos-filtrado-4").innerHTML = "";
    let filtrador4 = { valorMaximo: 50, etiquetasTiene: ["comida", "transporte"] }
    let gastosFiltrados4 = gestionPresupuesto.filtrarGastos(filtrador4);
    for (let k of gastosFiltrados4)
        mostrarGastoWeb("listado-gastos-filtrado-4", k);

    document.getElementById("agrupacion-dia").innerHTML = "";
    let gastosAgrupados1 = gestionPresupuesto.agruparGastos("dia");
    mostrarGastosAgrupadosWeb("agrupacion-dia", gastosAgrupados1, "día");

    document.getElementById("agrupacion-mes").innerHTML = "";
    let gastosAgrupados2 = gestionPresupuesto.agruparGastos("mes");
    mostrarGastosAgrupadosWeb("agrupacion-mes", gastosAgrupados2, "mes");

    document.getElementById("agrupacion-anyo").innerHTML = "";
    let gastosAgrupados3 = gestionPresupuesto.agruparGastos("anyo");
    mostrarGastosAgrupadosWeb("agrupacion-anyo", gastosAgrupados3, "año");
*/
}

function formatearFecha(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function actualizarPresupuestoWeb() {
    let presupuesto = parseFloat(prompt("Introduzca un presupuesto: "))
    gestionPresupuesto.actualizarPresupuesto(presupuesto);

    repintar();
}

function nuevoGastoWeb() {
    let descripcion = prompt("Introduzca la descripción: ");
    let valor = parseFloat(prompt("Introduzca el valor: "));
    let fecha = formatearFecha(Date.parse(prompt("Introduzca la fecha: ")));
    let etiquetas = prompt("Introduce las etiquetas: ").split(",");
    let newGasto = new gestionPresupuesto.CrearGasto(descripcion, valor, fecha, etiquetas);
    gestionPresupuesto.anyadirGasto(newGasto);
    repintar();
}

function nuevoGastoWebFormulario() {
    
    
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
        var formulario = plantillaFormulario.querySelector('form');
        
        
        let divContPpal = document.getElementById('controlesprincipales');
        divContPpal.append(formulario);
        let botonAnyaGastoFormulario = document.getElementById("anyadirgasto-formulario").setAttribute("disabled", "")
       
        let objSubmit = new FormSubmitHandle();
        formulario.addEventListener('submit', objSubmit);

        let objCancel = new FormCancelHandle();
        let botonCancelarFormulario = formulario.querySelector("button.cancelar");
        botonCancelarFormulario.addEventListener('click',objCancel);
       
}

function FormCancelHandle(){
    this.handleEvent = function (event) {
        event.currentTarget.parentNode.remove();
        let botonAnyadeGf = document.getElementById("anyadirgasto-formulario").removeAttribute("disabled");
        repintar();
    }

}
function FormSubmitHandle(){
    this.handleEvent = function (event) {
        event.preventDefault();
        let formulario = event.currentTarget;

        if (!this.hasOwnProperty('gasto'))
        {
        let dscr = formulario.elements.descripcion.value;
        let valor = parseFloat(formulario.elements.valor.value);
        let fecha = formulario.elements.fecha.value;
        let etiquetas = formulario.elements.etiquetas.value;
        
        let nG = new gestionPresupuesto.CrearGasto(dscr,valor,fecha,etiquetas);
        gestionPresupuesto.anyadirGasto(nG);
        }
        else 
        {
        let descripcion = formulario.elements.descripcion.value;
        this.gasto.actualizarDescripcion(descripcion);
        let valor = parseFloat(formulario.elements.valor.value);
        this.gasto.actualizarValor(valor);
        let fecha = formulario.elements.fecha.value;
        this.gasto.actualizarFecha(fecha);
        let etiquetas = formulario.elements.etiquetas.value;
        this.gasto.anyadirEtiquetas(etiquetas);
        }
        repintar();
        document.getElementById("anyadirgasto-formulario").removeAttribute("disabled");

    }

}

function EditarHandle() {

    this.handleEvent = function (event) {

        let descripcion1 = prompt("Introduzca la nueva descripción: ");
        let valor1 = parseFloat(prompt("Introduzca el nuevo valor: "));
        let fecha1 = formatearFecha(Date.parse(prompt("Introduzca la nueva fecha: ")));
        let etiquetas1 = prompt("Introduce las nuevas etiquetas: ");

        if (etiquetas1 !== null) {

            this.gasto.etiquetas = etiquetas1.split(',');
        }
        else
            this.gasto.etiquetas = [];

        this.gasto.actualizarValor(valor1);
        this.gasto.actualizarDescripcion(descripcion1);
        this.gasto.actualizarFecha(fecha1);
        repintar();

    }
}


function BorrarHandle() {
    //this.gasto = gastoS;
    this.handleEvent = function (event) {
        gestionPresupuesto.borrarGasto(this.gasto.id);
        repintar();
    }
}

function BorrarEtiquetasHandle() {
    this.handleEvent = function (event) {
        this.gasto.borrarEtiquetas(this.etiqueta);
        repintar();
    }
}

function EditarHandleFormulario(){
    this.handleEvent = function (event) {
       
        //seleccionamos el botón editar formulario
        let buttonEF = event.currentTarget;
        buttonEF.setAttribute('disabled', '');
        //clonamos la plantilla o template
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
        //seleccionamos el formualario desde la plantilla clonada
        var formulario = plantillaFormulario.querySelector('form');
        //seleccionamos el div del gasto actual para poder insertar el formulario justo después del gasto.
        let divGasto = document.getElementById(this.gasto.id);
        divGasto.append(formulario)
        
        let botonAnyaGastoFormulario = document.getElementById("anyadirgasto-formulario").setAttribute("disabled", "");
        
        formulario.elements.descripcion.value = this.gasto.descripcion;
        formulario.elements.valor.value = this.gasto.valor;
        formulario.elements.fecha.value = new Date(this.gasto.fecha).toISOString().substr(0,10);
        formulario.elements.etiquetas.value = this.gasto.etiquetas; 

        let objSubmit = new FormSubmitHandle();
        objSubmit.gasto = this.gasto;
        formulario.addEventListener('submit', objSubmit);

        let objCancel = new FormCancelHandle();
        objCancel.gasto = this.gasto;
        let botonCancelarFormulario = formulario.querySelector("button.cancelar");
        botonCancelarFormulario.addEventListener('click',objCancel);


    }
}

function filtrarGastoWeb(){

        //botonS.addEventListener('submit',function() { 
        this.handleEvent = function (event){
        //let botonS = document.querySelector('#formulario-filtrado button');
        event.preventDefault();
        let formulario = event.currentTarget;
        let objFilter = {};
        //this.formulario = document.getElementById('formulario-filtrado');
       // alert("FORMULARIO = " + formulario);
        if (formulario.elements["formulario-filtrado-descripcion"].value !== "")
            objFilter.descripcionContiene = formulario.elements["formulario-filtrado-descripcion"].value;
        if (formulario.elements["formulario-filtrado-valor-minimo"].value !== "")
            objFilter.valorMinimo = parseFloat(formulario.elements["formulario-filtrado-valor-minimo"].value);
        if (formulario.elements["formulario-filtrado-valor-maximo"].value !== "")    
            objFilter.valorMaximo = parseFloat(formulario.elements["formulario-filtrado-valor-maximo"].value);
        if (formulario.elements["formulario-filtrado-fecha-desde"].value !== '')    
            objFilter.fechaDesde = formulario.elements["formulario-filtrado-fecha-desde"].value;
        if (formulario.elements["formulario-filtrado-fecha-hasta"].value !== '')        
            objFilter.fechaHasta = formulario.elements["formulario-filtrado-fecha-hasta"].value;
        if (formulario.elements["formulario-filtrado-etiquetas-tiene"].value !== ''){                
            objFilter.etiquetasTiene = formulario.elements["formulario-filtrado-etiquetas-tiene"].value;
            objFilter.etiquetasTiene = gestionPresupuesto.transformarListadoEtiquetas(objFilter.etiquetasTiene);
        }

        let GFiltrados = gestionPresupuesto.filtrarGastos(objFilter);
       // alert(JSON.stringify(objFilter));
        
        document.getElementById("listado-gastos-completo").innerHTML = " ";
        
        for (let elem of GFiltrados)
        {   
            //alert(elem.mostrarGasto());    
            mostrarGastoWeb('listado-gastos-completo', elem);
        }
        //repintar();
        }//fin handleEvent
   // });//fin funcion callback y addEventListener



}

function guardarGastosWeb(){
    this.handleEvent = function(event){
        localStorage.GestorGastosDWEC = JSON.stringify(gestionPresupuesto.listarGastos());
    }

}

function cargarGastosWeb(){
    this.handleEvent = function(event){
        if (localStorage.GestorGastosDWEC == null) 
        gestionPresupuesto.cargarGastos([]);
    else 
        gestionPresupuesto.cargarGastos(JSON.parse(localStorage.GestorGastosDWEC));
    repintar();    
    }

}


//Botones
const actualizarpresupuesto = document.getElementById("actualizarpresupuesto");
const anyadirgasto = document.getElementById("anyadirgasto");
const anyadirgastoF = document.getElementById("anyadirgasto-formulario");
//const botonFGW = document.querySelector('#formulario-filtrado button');
//alert('botonFGW = ' + botonFGW);
const formFGW = document.getElementById('formulario-filtrado');
//alert('formFGW = ' + formFGW);
let saveDataButton = document.createElement('button');
let loadDataButton = document.createElement('button');
saveDataButton.id = 'guardar-gastos';
saveDataButton.textContent = 'Guardar gastos'
loadDataButton.id = 'cargar-gastos';
loadDataButton.textContent = 'Cargar gastos';
let objGrab = new guardarGastosWeb();
let objLee = new cargarGastosWeb();
saveDataButton.addEventListener('click',objGrab);
loadDataButton.addEventListener('click',objLee)
document.getElementById('controlesprincipales').append(saveDataButton,loadDataButton);



//Eventos
//objFGW.objFilter = {};
//objFGW.formFGW = formFGW;
actualizarpresupuesto.addEventListener('click', actualizarPresupuestoWeb);
anyadirgasto.addEventListener('click', nuevoGastoWeb);
anyadirgastoF.addEventListener('click',nuevoGastoWebFormulario);
let objFGW = new filtrarGastoWeb();

formFGW.addEventListener('submit',objFGW);

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
