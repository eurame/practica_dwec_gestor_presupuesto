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

let g1 = new gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let g2 = new gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let g3 = new gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let g4 = new gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let g5 = new gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let g6 = new gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

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

