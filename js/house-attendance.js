function crearJson() {
  fetch("https://api.propublica.org/congress/v1/116/house/members.json", {
      headers: new Headers({
        "X-API-Key": "Bjm9VULSbjAoijASJArW4ME5wAQtcfE8ez5EMhXh",
      })
    })
    .then(function (response) {
    
      return response.json()
    })
    .then(function (data) {
      app.senadores = data.results[0].members;
      app.miembros = app.senadores;
      app.partidosFiltrados = buscandoCadaPartido(app.miembros);
      app.partyR = app.partidosFiltrados.partidoR;
      app.partyD = app.partidosFiltrados.partidoD;
      app.partyI = app.partidosFiltrados.partidoI;
      app.statistic.numberOfDemocrat = app.partidosFiltrados.partidoR;
      app.statistic.numberOfRepublican = app.partidosFiltrados.partidoD;
      app.statistic.numberOfIndependent = app.partidosFiltrados.partidoI;
      app.statistic.totalPercentR = votosPromedio(app.partyR);
      app.statistic.totalPercentD = votosPromedio(app.partyD);
      app.statistic.totalPercentI = votosPromedio(app.partyI);
      diezPorciento = Math.round((app.miembros.length * 10) / 100);
      menores = miembrosMenores(app.miembros);
      app.statistic.membersLeastEngaged = buscarPorcentaje(menores, diezPorciento, app.miembros);
      mayores= miembrosMayores(app.miembros);
      app.statistic.membersMostEngaged = buscarPorcentaje(mayores, diezPorciento, app.miembros);

    })

}
crearJson();

var app = new Vue({
  el: '#app',
  data: {
    senadores: [],
    miembros: [],
    partidosFiltrados: [],
    partyI: [],
    partyD: [],
    partyR: [],

    statistic: {
      numberOfDemocrat: [],
      numberOfRepublican: [],
      numberOfIndependent: [],
      totalPercentI: 0,
      totalPercentR: 0,
      totalPercentD: 0,
      membersLeastEngaged: [],
      membersMostEngaged: []

    }


  }
});



//Con esto cree un array por cada partido
function buscandoCadaPartido(listaDeMiembros) {

  var partidoR = listaDeMiembros.filter((x) => (x.party === "R"));
  var partidoD = listaDeMiembros.filter((x) => (x.party === "D"));
  var partidoI = listaDeMiembros.filter((x) => (x.party === "I"));
  return {
    partidoR: partidoR,
    partidoD: partidoD,
    partidoI: partidoI
  }
}


// Promedio de todos los partidos

function votosPromedio(partidos) {
  var sumaPorcentaje = 0;
  for (i = 0; i < partidos.length; i++) {
    sumaPorcentaje += partidos[i].votes_with_party_pct;
  }
  return sumaPorcentaje / partidos.length;
}


//COMIENZO A BUSCAR EL 10% DE MAS Y MENOS COMPROMETIDOS

function miembrosMenores(listaDeMiembros) {
  listaDeMiembros.sort(function (a, b) { //ordenamos de menor a mayor
    return a.missed_votes_pct - b.missed_votes_pct
  });
  return listaDeMiembros;
};

function buscarPorcentaje(miembrosTotales, porcentaje, listaDeMiembros) {
  listaComprometidos = miembrosTotales.slice(0, porcentaje);
  var ultimoValorComprometido = listaComprometidos[listaComprometidos.length - 1].missed_votes_pct;
  for (var i = porcentaje; i < miembrosTotales.length; i++) {
    if (listaDeMiembros[i].missed_votes_pct === ultimoValorComprometido) {
      listaComprometidos.push(miembrosTotales[i]);
    }
  }
  return listaComprometidos
}


function miembrosMayores(listaDeMiembros) {
  listaDeMiembros.sort(function (a, b) { //ordenamos de mayor a menor
    return b.missed_votes_pct - a.missed_votes_pct
  })
  return listaDeMiembros;
};

