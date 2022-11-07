import {Serie} from "./serie.js";
import {series} from "./data.js"

let serieTable: HTMLElement = document.getElementById("serie")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let serieCard: HTMLElement = document.getElementById("cardSerie")!;


mostrarDatosSeries(series)
mostrarEstadisticas(series)

let btns: HTMLCollection = document.getElementsByClassName("btn")!;

for (var i = 0; i < btns.length; i++) 
{
    let btn: HTMLElement = document.getElementById(btns[i].id)!;
    let serie: Serie = series[Number(btns[i].id)-1];
    btn.addEventListener("click", (e:Event) => mostrarInfoSerie(serie));
}

function mostrarDatosSeries(series: Array<Serie>):void
{
    let tbodySerie = document.createElement("tbody");
    for(let serieAct of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serieAct.id}</td>
                                <td><input type="button" value="${serieAct.name}" id=${serieAct.id} class="btn"></input></td>
                                <td>${serieAct.channel}</td>
                                <td>${serieAct.seasons}</td>`;
        tbodySerie.appendChild(trElement);
        let btnActual: HTMLElement = document.getElementById(`button ${serieAct.id}`)!; 
    }
    serieTable.appendChild(tbodySerie);
}


function mostrarEstadisticas(series: Array<Serie>):void
{
    let promedio: number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let serieAct: Serie = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio/series.length;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio temporadas: </b></td><td>${promedio}</td>`;
    estadisticasTable.appendChild(trElement);
}


function mostrarInfoSerie(serie: Serie):void
{
    let content =   `<img class="card-img-top" src="${serie.image}">
                    <div class="card-body" style="font-size:1vw">
                    <h3>${serie.name}</h3>
                    <p class="card-text">${serie.description}\n</p>
                    <p class="card-text" style="color:#0000FF">${serie.web}</p>
                    </div>`
    serieCard.innerHTML = content;
}