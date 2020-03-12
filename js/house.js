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
      app.membersHouse = data.results[0].members;
      app.houseFiltrados = app.membersHouse;
      var estados = buscoLosEstados(app.membersHouse);
      app.estados = buscoEstadosNoRepetidos(estados);

    })

}

crearJson();

var app = new Vue({
  el: '#app',
  data: {
    membersHouse: [],
    houseFiltrados: []
  }
});

//Filtro la informacion a los checkboxes y al menu desplegable
function filtrarTabla(listaDeMiembros) {
  var tablaFiltrada = [];
  var estadoSeleccionado = document.getElementById('estados').value;
  var partidos = Array.from(document.querySelectorAll("input[name=partido]:checked")).map(el => el.value);
  if (partidos.length > 0) {
    for (i = 0; i < listaDeMiembros.length; i++) {
      if ((partidos.indexOf(listaDeMiembros[i].party) >= 0) && (estadoSeleccionado == listaDeMiembros[i].state || estadoSeleccionado == "all")) {
        tablaFiltrada.push(listaDeMiembros[i])
      }
    }
    app.houseFiltrados = tablaFiltrada;
  } else
    app.houseFiltrados = [];
  //imprimirTabla(tablaFiltrada);
}

function buscoLosEstados(listaDeMiembros) {
  //busco los estados repetidos
  var members = listaDeMiembros.length;
  var estados = new Array(members);
  for (i = 0; i < members; i++) {
    estados[i] = listaDeMiembros[i].state;
  }
  return estados
};

function buscoEstadosNoRepetidos(arrayEstados) {
  var noRepetidos = [];
  var temporal = [];

  arrayEstados.forEach((value, index) => {
    temporal = Object.assign([], arrayEstados); //Copiado de elemento
    temporal.splice(index, 1); //Se elimina el elemnto q se compara
    /**
     * Se busca en temporal el elemento, y en repetido para
     * ver si esta ingresado al array. indexOf returna
     * -1 si el elemento no se encuetra
     **/
    if (temporal.indexOf(value) != -1 && noRepetidos.indexOf(value) == -1) noRepetidos.push(value);
  });
  return noRepetidos
};


 function vermas(id) {
   if (id == "mas") {
     document.getElementById("desplegar").style.display = "block";
     document.getElementById("mas").style.display = "none";
   } else {
     document.getElementById("desplegar").style.display = "none";
     document.getElementById("mas").style.display = "inline";
   }
 }
