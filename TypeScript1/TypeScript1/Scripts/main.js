import { series } from "./data.js";
var serieTable = document.getElementById("serie");
var estadisticasTable = document.getElementById("estadisticas");
var serieCard = document.getElementById("cardSerie");
mostrarDatosSeries(series);
mostrarEstadisticas(series);
var btns = document.getElementsByClassName("btn");
var _loop_1 = function () {
    var btn = document.getElementById(btns[i].id);
    var serie = series[Number(btns[i].id) - 1];
    btn.addEventListener("click", function (e) { return mostrarInfoSerie(serie); });
};
for (var i = 0; i < btns.length; i++) {
    _loop_1();
}
function mostrarDatosSeries(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serieAct = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serieAct.id, "</td>\n                                <td><input type=\"button\" value=\"").concat(serieAct.name, "\" id=").concat(serieAct.id, " class=\"btn\"></input></td>\n                                <td>").concat(serieAct.channel, "</td>\n                                <td>").concat(serieAct.seasons, "</td>");
        tbodySerie.appendChild(trElement);
        var btnActual = document.getElementById("button ".concat(serieAct.id));
    }
    serieTable.appendChild(tbodySerie);
}
function mostrarEstadisticas(series) {
    var promedio = 0;
    for (var index = 0; index < series.length; index++) {
        var serieAct = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio / series.length;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio temporadas: </b></td><td>".concat(promedio, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarInfoSerie(serie) {
    var content = "<img class=\"card-img-top\" src=\"".concat(serie.image, "\">\n                    <div class=\"card-body\" style=\"font-size:1vw\">\n                    <h3>").concat(serie.name, "</h3>\n                    <p class=\"card-text\">").concat(serie.description, "\n</p>\n                    <p class=\"card-text\" style=\"color:#0000FF\">").concat(serie.web, "</p>\n                    </div>");
    serieCard.innerHTML = content;
}
