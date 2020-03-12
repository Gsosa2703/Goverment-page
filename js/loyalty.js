function crearJson() {
  fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
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
      app.statistic.membersLeastLoyal = buscarDiezPorciento(menores, diezPorciento, app.miembros);
      mayores= miembrosMayores(app.miembros);
      app.statistic.membersMostLoyal = buscarDiezPorciento(mayores, diezPorciento, app.miembros);

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
      membersLeastLoyal: [],
      membersMostLoyal: []

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



//COMIENZO A BUSCAR EL 10% DE MAS Y MENOS LEALES

function miembrosMenores(listaDeMiembros) {
  listaDeMiembros.sort(function (a, b) { //ordenamos de menor a mayor
    return a.votes_with_party_pct - b.votes_with_party_pct
  });
  return listaDeMiembros;
};

//BUSCAR EL PORCENTAJE DEL ARRAY ORDENADO
function buscarDiezPorciento(array, porcentaje, listaDeMiembros) {
  listaLeales = array.slice(0, porcentaje);
  var ultimoValorLeal = listaLeales[listaLeales.length - 1].votes_with_party_pct;
  for (var i = porcentaje; i < array.length; i++) {
    if (listaDeMiembros[i].votes_with_party_pct === ultimoValorLeal) {
      listaLeales.push(array[i]);
    }
  }
  return listaLeales
}


function miembrosMayores(listaDeMiembros) {
  listaDeMiembros.sort(function (a, b) { //ordenamos de mayor a menor
    return b.votes_with_party_pct - a.votes_with_party_pct
  })
  return listaDeMiembros;
};

