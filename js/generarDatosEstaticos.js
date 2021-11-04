<<<<<<< HEAD
import * as gestPres from './gestionPresupuesto';
import * as gestPresWeb from './gestionPresupuestoWeb';

gestPres.actualizarPresupuesto(1500);


/*
import * as gestionPresupuesto from './gestionPresupuesto.js';
import * as gestionPresupuestoWeb from './gestionPresupuestoWeb.js';

//Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gestionPresupuesto.actualizarPresupuesto(1500);

//Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
let mostPresupuesto = gestionPresupuesto.mostrarPresupuesto();
gestionPresupuestoWeb.mostrarDatoEnId('presupuesto', mostPresupuesto);

//Crear los siguientes gastos (función crearGasto)
let gasto1 = gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

//Añadir los gastos creados (función anyadirGasto)
gestionPresupuesto.anyadirGasto(gasto1);
gestionPresupuesto.anyadirGasto(gasto2);
gestionPresupuesto.anyadirGasto(gasto3);
gestionPresupuesto.anyadirGasto(gasto4);
gestionPresupuesto.anyadirGasto(gasto5);
gestionPresupuesto.anyadirGasto(gasto6);

//Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
let calcularTotalGastos = gestionPresupuesto.calcularTotalGastos();
gestionPresupuestoWeb.mostrarDatoEnId("gastos-totales", calcularTotalGastos);

//Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
let calcularBalance = gestionPresupuesto.calcularBalance();
gestionPresupuestoWeb.mostrarDatoEnId("balance-total", calcularBalance);

//Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
let listaGastos = gestionPresupuesto.listarGastos();
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-completo", listaGastos);

//Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1 (funciones filtrarGastos y mostrarGastoWeb)
let filtrador1 = {fechaDesde : "2021-09-01", fechaHasta : "2021-09-30"}
let gastosFiltrados1 = gestionPresupuesto.filtrarGastos(filtrador1);
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-1", gastosFiltrados1);

//Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2 (funciones filtrarGastos y mostrarGastoWeb)
let filtrador2 = {valorMinimo : 50}
let gastosFiltrados2 = gestionPresupuesto.filtrarGastos(filtrador2);
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-2", gastosFiltrados2);

//Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3 (funciones filtrarGastos y mostrarGastoWeb)
let filtrador3 = {valorMinimo : 200, etiquetasTiene : ["seguros", ""]}
let gastosFiltrados3 = gestionPresupuesto.filtrarGastos(filtrador3);
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-3", gastosFiltrados3);

//Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4 (funciones filtrarGastos y mostrarGastoWeb)
let filtrador4 = {valorMaximo : 50, etiquetasTiene : ["comida", "transporte"]}
let gastosFiltrados4 = gestionPresupuesto.filtrarGastos(filtrador4);
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-4", gastosFiltrados4);    

// //Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)
// let filtrador5 = {valorMaximo : 50, etiquetasTiene : ["comida", "transporte"]}
// let gastosFiltrados5 = gestionPresupuesto.filtrarGastos(filtrador5);
// gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-4", gastosFiltrados5);   

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let gastosAgrupados1 = gestionPresupuesto.agruparGastos("dia");
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb("agrupacion-dia", gastosAgrupados1, "día")

//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let gastosAgrupados2 = gestionPresupuesto.agruparGastos("mes");
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb("agrupacion-mes", gastosAgrupados2, "mes")

//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let gastosAgrupados3 = gestionPresupuesto.agruparGastos("anyo");
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb("agrupacion-anyo", gastosAgrupados3, "año")
*/
=======
'use strict';

import * as gestionPresupuesto from './gestionPresupuesto.js';
import * as gestionPresupuestoWeb from './gestionPresupuestoWeb.js';

//Actualizar el presupuesto a 1500€
gestionPresupuesto.actualizarPresupuesto(1500);

//Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
let pres = gestionPresupuesto.mostrarPresupuesto();
gestionPresupuestoWeb.mostrarDatoEnId('presupuesto',pres);

/*Crear los siguientes gastos (función crearGasto):
~"Compra carne", 23.44, "2021-10-06", "casa", "comida"~
~"Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"~
~"Bonobús", 18.60, "2020-05-26", "transporte"~
~"Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"~
~"Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"~
~"Seguro coche", 195.78, "2021-10-06", "transporte", "seguros"~*/

let g1 = gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let g2 = gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let g3 = gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let g4 = gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let g5 = gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let g6 = gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

//Añadir los gastos creados (función anyadirGasto)

gestionPresupuesto.anyadirGasto(g1);
gestionPresupuesto.anyadirGasto(g2);
gestionPresupuesto.anyadirGasto(g3);
gestionPresupuesto.anyadirGasto(g4);
gestionPresupuesto.anyadirGasto(g5);
gestionPresupuesto.anyadirGasto(g6);

//Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)

let gT = gestionPresupuesto.calcularTotalGastos();
gestionPresupuestoWeb.mostrarDatoEnId("gastos-totales",gT);

//Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
let bT = gestionPresupuesto.calcularBalance();
gestionPresupuestoWeb.mostrarDatoEnId("balance-total",bT);

//Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
let listadoG = gestionPresupuesto.listarGastos();

for (let a of listadoG)
gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-completo", a);

//Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1 (funciones filtrarGastos y mostrarGastoWeb)
let objF1 = {fechaDesde: "2021-09-01", fechaHasta: "2021-09-30"};
let gFiltrados = gestionPresupuesto.filtrarGastos(objF1);

for (let b of gFiltrados)
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-1', b);
//Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2 (funciones filtrarGastos y mostrarGastoWeb)
let objF2 = {valorMinimo: 50};
let gFiltrados2 = gestionPresupuesto.filtrarGastos(objF2);

for (let c of gFiltrados2)
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-2', c);

//Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3 (funciones filtrarGastos y mostrarGastoWeb)
let objF3 = {valorMinimo: 200,etiquetasTiene: ['seguros']};
let gFiltrados3 = gestionPresupuesto.filtrarGastos(objF3);

for (let d of gFiltrados3)
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-3', d);

//Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4 (funciones filtrarGastos y mostrarGastoWeb)
let objF4 = {valorMaximo: 50, etiquetasTiene: ["comida", "transporte"]};
let gFiltrados4 = gestionPresupuesto.filtrarGastos(objF4);

for (let e of gFiltrados4)
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-4', e);

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let objAgrup = gestionPresupuesto.agruparGastos('dia');
//console.log(JSON.stringify(objAgrup));
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-dia', objAgrup,'día');

//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let objAgrup2 = gestionPresupuesto.agruparGastos('mes');
//console.log(JSON.stringify(objAgrup2));
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-mes', objAgrup2,'mes');

//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let objAgrup3 = gestionPresupuesto.agruparGastos('anyo');
//console.log(JSON.stringify(objAgrup3));
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-anyo', objAgrup3,'año');

>>>>>>> a4a8f0bb028a4fd67e3455f1dab81e6eb1287561
