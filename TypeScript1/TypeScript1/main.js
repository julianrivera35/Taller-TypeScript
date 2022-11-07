"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let serieTable = document.getElementById("serie");
let estadisticasTable = document.getElementById("estadisticas");
let serieCard = document.getElementById("cardSerie");
mostrarDatosSeries(data_js_1.series);
mostrarEstadisticas(data_js_1.series);
let btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    let btn = document.getElementById(btns[i].id);
    let serie = data_js_1.series[Number(btns[i].id) - 1];
    btn.addEventListener("click", (e) => mostrarInfoSerie(serie));
}
function mostrarDatosSeries(series) {
    let tbodySerie = document.createElement("tbody");
    for (let serieAct of series) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serieAct.id}</td>
                                <td><input type="button" value="${serieAct.name}" id=${serieAct.id} class="btn"></input></td>
                                <td>${serieAct.channel}</td>
                                <td>${serieAct.seasons}</td>`;
        tbodySerie.appendChild(trElement);
        let btnActual = document.getElementById(`button ${serieAct.id}`);
    }
    serieTable.appendChild(tbodySerie);
}
function mostrarEstadisticas(series) {
    let promedio = 0;
    for (let index = 0; index < series.length; index++) {
        let serieAct = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio / series.length;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio temporadas: </b></td><td>${promedio}</td>`;
    estadisticasTable.appendChild(trElement);
}
function mostrarInfoSerie(serie) {
    let content = `<img class="card-img-top" src="${serie.image}">
                    <div class="card-body" style="font-size:1vw">
                    <h3>${serie.name}</h3>
                    <p class="card-text">${serie.description}\n</p>
                    <p class="card-text" style="color:#0000FF">${serie.web}</p>
                    </div>`;
    serieCard.innerHTML = content;
}
