function biggestNumber(array) {
  var valorMaximo = numbers;
  var maximo = valorMaximo[0];
  for (let index = 0; index < numbers; index++)
    if (valorMaximo < maximo) {
      maximo = valorMaximo[index];
    }
  return console.log(maximo)
}


/// function imprimirValorMaximo(array) {
//   var i = 0;
//   var arregloMaximo = array;
//  var maximo = arregloMaximo[0];
//  for (i; i < arregloMaximo.length; i++) {
//    if (arregloMaximo[i] > maximo) {
//       maximo = arregloMaximo[i];
//    }
//   }
// console.log("Valor mas alto del arreglo es:" + maximo);
//}

var cadenaRevertida = "";

//Itero la cadena de manera inversa
for (var i = cadena.length - 1; i >= 0; i--) {
  //Voy concatenando el valor a la cadena resultado
  cadenaRevertida += cadena[i];
}

console.log(cadenaRevertida);

function invertir_nums(numero) {
  var numeros = "552236744";
  return console.log(numeros.split('').reverse().join(''));
}

function invertir_nums(numeros) {
  return numeros.split().reverse();
  console.log(invertir_nums("52549639"));
}

var repetidos = [];

for (var idx = moreNumbers.length - 1; idx >= 0; idx--) {
  if (moreNumbers.indexOf(moreNumbers[idx]) != idx) {
    repetidos.push(moreNumbers[idx]);
  };
};
console.log(repetidos);

for (var index = 1; index < array.length; index++)

  var elementos = [1, 1, 3, 5, 6, 4, 9, 5, 3, 5, 7, 9, 0, 1];
var repetidos = [];
var temporal = [];

elementos.forEach((value, index) => {
  temporal = Object.assign([], elementos); //Copiado de elemento
  temporal.splice(index, 1); //Se elimina el elemnto q se compara
  /**
   * Se busca en temporal el elemento, y en repetido para 
   * ver si esta ingresado al array. indexOf returna
   * -1 si el elemento no se encuetra
   **/
  if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1) repetidos.push(value);
});

console.log(repetidos);

/////////////////////////////////////////////////
//TASK 2
var tbl = document.getElementById("tabla");
var tblBody = document.createElement("tbody");
for (var i = 0; i < columna.length; i++) {
  var fila = document.createElement("tr");
  for (var j = 0; j < filas.length; j++) {
    <
    script >
      var datajson = JSON.stringify(data, null, 2);
    document.getElementById("senate-data").innerHTML = datajson; <
    /script>






    function caja() {
      var checkbox1 = document.getElementById("republic");
      var checkbox2 = document.getElementById("democrata")
      var checkbox3 = document.getElementById("independent");
      var todas = checkbox1 + checkbox2 + checkbox3;

      todas.onclick = function () {
        if (checkbox1.checked = true) {
          checkbox2.checked = null;
          checkbox3.checked = null;
        } else if (checkbox2.checked = true) {
          checkbox1.checked = null;
          checkbox3.checked = null;
        } else if (checkbox3.checked = true) {
          checkbox1 = null;
          checkbox2 = null;
        } else(todas.checked = false) {
          todas = null;
        }
      }
    }
  }
}
function uncheck() {
  var checkbox1 = document.getElementById("republic");
  var checkbox2 = document.getElementById("democrata")
  var checkbox3 = document.getElementById("independent");
  checkbox1.onclick = function () {
    if (checkbox1.checked = true) {
      checkbox2.checked = null;
      checkbox3.checked = null;
    }
  }
  checkbox2.onclick = function () {
    if (checkbox2.checked = true) {
      checkbox1.checked = null;
      checkbox3.checked = null;
    }
  }
  checkbox3.onclick = function () {
    if (checkbox3.checked = true) {
      checkbox1.checked = null;
      checkbox2.checked = null;
    }
  }
}



console.log (republicanos);
var partidoR = miembros.filter((x) => (x.party[0] === "R"));
var partidoD = miembros.filter((x) => (x.party[0] === "D"));
var partidoI = miembros.filter((x) => (x.party[0] === "I"));
console.log(partidoR);
console.log(partidoD);
console.log(partidoI);


var partidos = Array.from(document.querySelectorAll("input[name=partido]")).map(el => el.value);
console.log(partidos);

function imprimirTabla(listaDeMiembros) {
  var listaFinal = "";
  for (i = 0; i < listaDeMiembros.length; i++) {
    listaFinal += "<tr>" + "<td>" + i + "</td>" + "<td>" + "<a href=" + listaDeMiembros[i].url + ">" + listaDeMiembros[i].first_name + ", " + listaDeMiembros[i].last_name + "</a>" + "</td>" +
      "<td>" +
      listaDeMiembros[i].party + "</td>" +
      " <td>" +
      listaDeMiembros[i].state + "</td> " +
      "<td>" +
      listaDeMiembros[i].seniority + "</td> " +
      " <td>" +
      listaDeMiembros[i].votes_with_party_pct + "%" + "</td></tr>"
  }
  return listaFinal;
}

document.getElementById("senate-data").innerHTML = imprimirTabla(miembros);



function imprimirTablaD(datosTabla) {
  var senateDataD = "";
  for (i = 0; i < datosTabla.length; i++) {
    if (miembros[i].party == "D") {
      senateDataD += "<tr>" + "<td>" + i + "</td>" + "<td>" + "<a href=" + datosTabla[i].url + ">" + datosTabla[i].first_name + ", " + datosTabla[i].last_name + "</a>" + "</td>" +
        "<td>" +
        datosTabla[i].party + "</td>" +
        " <td>" +
        datosTabla[i].state + "</td> " +
        "<td>" +
        datosTabla[i].seniority + "</td> " +
        " <td>" +
        datosTabla[i].votes_with_party_pct + "%" + "</td></tr>"

    }
  }
  return senateDataD;
}

function filtrarTablaD() {
  document.getElementById("senate-data").innerHTML += imprimirTablaD(miembros);
};

function imprimirTablaI(datosTabla) {
  var senateDataI = "";
  for (i = 0; i < datosTabla.length; i++) {
    if (miembros[i].party == "I") {
      senateDataI += "<tr>" + "<td>" + i + "</td>" + "<td>" + "<a href=" + datosTabla[i].url + ">" + datosTabla[i].first_name + ", " + datosTabla[i].last_name + "</a>" + "</td>" +
        "<td>" +
        datosTabla[i].party + "</td>" +
        " <td>" +
        datosTabla[i].state + "</td> " +
        "<td>" +
        datosTabla[i].seniority + "</td> " +
        " <td>" +
        datosTabla[i].votes_with_party_pct + "%" + "</td></tr>"

    }
  }
  return senateDataI;
}

function filtrarTabla() {
  document.getElementById("senate-data").innerHTML += imprimirTablaI(miembros);
};


for (i=0; i< miembros.length;i++) {
  var finalEstados = [];
  var estados= miembros[i].state;
  finalEstados.push(estados[i]);
  console.log(finalEstados);
}
function repetido(elemento) {
  return elemento == elemento;
  }

var filtrados = finalEstados.filter(repetido);
// filtrados es [12, 130, 44]
  console.log(filtrados);


 function imprimirTabla(listaDeMiembros) {
   var listaFinal = "";
   for (i = 0; i < listaDeMiembros.length; i++) {
     var url = listaDeMiembros[i].url;
     listaFinal += "<tr>" + "<td>" + i + "</td>" + "<td>" + "<a href=" + listaDeMiembros[i].url + ">" + listaDeMiembros[i].first_name + ", " + listaDeMiembros[i].last_name + "</a>" + "</td>" +
       "<td>" +
       listaDeMiembros[i].party + "</td>" +
       " <td>" +
       listaDeMiembros[i].state + "</td> " +
       "<td>" +
       listaDeMiembros[i].seniority + "</td> " +
       " <td>" +
       listaDeMiembros[i].votes_with_party_pct + "%" + "</td></tr>"
   }
   return listaFinal;
    votosPorcentajeD = [];
  for (i = 0; i < partidoD.length; i++) {
    votosPorcentajeD.push(partidoD[i].votes_with_party_pct)
  }

  var sumaPorcentajeD = 0;
  for (var i in votosPorcentajeD) {
    sumaPorcentajeD += votosPorcentajeD[i]
  }

  var percentTotalD = sumaPorcentajeD / democrat;
 }


 );

function tablaMenosLeales(menosLeales) {
  var listaMenosLeales = "";
  for (i = 0; i < menosLeales.length; i++) {
    listaMenosLeales += "<tr>" + "<td>" + "<a href=" + menosLeales[i].url + ">" + menosLeales[i].first_name + ", " + menosLeales[i].last_name + "</a>" + "</td>" +
      "<td>" +
      menosLeales[i].total_votes + "</td>" +
      " <td>" +
      menosLeales[i].votes_with_party_pct + "%" + "</td></tr>"
  }
  return listaMenosLeales;
}

document.getElementById("senate-menosLeales").innerHTML += tablaMenosLeales()




var miembrosMostLoyal = miembros.sort(function (a, b) {
    return (b.votes_with_party_pct - a.votes_with_party_pct)
})
console.log (miembrosMostLoyal)

var miembrosMenos = [];
function buscarDiezPorciento(array) {
  
 var miembrosMenosVotados = array.splice(0, diezPorciento);
  for (i = miembrosMenosVotados.length - 1; i < miembrosMenosVotados.length -1; i++) {
    for (j = 0; j < array.length; j++) {
      if (miembrosMenosVotados[i] == array[j]) {
          miembrosMenos.push(array[j])
      } else {
        document.getElementById ("senate-loyalty").innerHTML = "hola"
      }
    }
  }
  
}
 buscarDiezPorciento(votosOrdenados)
console.log (miembrosMenos)

/// buscar los elementos repetidos 

let repetidos=votosOrdenados.filter (
    (value,pos,self) => {
        return self.slice(pos+1).indexOf(value) >= 0 && pos === self.indexOf(value);
    }
);

var votosTotales = new Array(miembros.length);
for (i = 0; i < miembros.length; i++) {
  votosTotales[i] = miembros[i].votes_with_party_pct;
}
console.log(votosTotales);

var votosOrdenados = votosTotales.sort();
console.log(votosOrdenados);

function menuDesplegable(estadosNoRepetidos) {
  var states = "";

  for (i = 0; i < estadosNoRepetidos.length; i++) {
    states +=
      "<option value=" + estadosNoRepetidos[i] + ">" + estadosNoRepetidos[i] + "</option>"
  }
  return states;
}

/////CREAR TABLA LOYALTY
function senateLoyalty(property) {

  var listaPartido = "<tr>" + "<td>" + "Republican" + "</td>" + "<td>" + property.numberOfRepublican.length + "</td>" + "<td>" + property.totalPercentR + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Democrat" + "</td>" + "<td>" + property.numberOfDemocrat.length + "</td>" + "<td>" + property.totalPercentD + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Independent" + "</td>" + "<td>" + property.numberOfIndependent.length + "</td>" + "<td>" + property.totalPercentI + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Total" + "</td>" + "<td>" + (property.numberOfDemocrat.length + property.numberOfIndependent.length + property.numberOfRepublican.length) + "</td>" + "<td>" + (property.totalPercentD + property.totalPercentI + property.totalPercentR) + "</td>" + "</tr>"

  return listaPartido;
}

document.getElementById("senate-loyalty").innerHTML += senateLoyalty(app.statistic);




function tablaLeales(miembrosLeales) {
  var listaLeales = "";
  for (i = 0; i < miembrosLeales.length; i++) {
    listaLeales += "<tr>" + "<td>" + "<a href=" + miembrosLeales[i].url + ">" + miembrosLeales[i].first_name + ", " + miembrosLeales[i].last_name + "</a>" + "</td>" +
      "<td>" +
      miembrosLeales[i].total_votes + "</td>" +
      " <td>" +
      miembrosLeales[i].votes_with_party_pct + "%" + "</td></tr>"
  }
  return listaLeales;
}

document.getElementById("senate-menosLeales").innerHTML += tablaLeales(app.statistic.membersLeastLoyal);
document.getElementById("senate-masLeales").innerHTML += tablaLeales(app.statistic.membersMostLoyal);
 

// PAGINA ORIGINAL HOUSE 
 var membersHouse = datos.results[0].members;
 console.log(membersHouse);


imprimirTabla(membersHouse);
function imprimirTabla(listaDeMiembros) {
  document.getElementById("house-data").innerHTML = tablaHouse(listaDeMiembros);
}

//Dibujo la tabla 
function tablaHouse(listaDeMiembros) {
  var listaFinal = "";
  for (i = 0; i < listaDeMiembros.length; i++) {
    listaFinal += "<tr>" + "<td>" + i + "</td>" + "<td>" + "<a href=" + listaDeMiembros[i].url + ">" + listaDeMiembros[i].first_name + ", " + listaDeMiembros[i].last_name + "</a>" + "</td>" +
      "<td>" +
      listaDeMiembros[i].party + "</td>" +
      " <td>" +
      listaDeMiembros[i].state + "</td> " +
      "<td>" +
      listaDeMiembros[i].seniority + "</td> " +
      " <td>" +
      listaDeMiembros[i].votes_with_party_pct + "%" + "</td></tr>"
  }
  return listaFinal;
}

//Filtro la informacion a los checkboxes y al menu desplegable
function filtrarTabla(listaDeMiembros) {
  var tablaFiltrada = [];
  var estadoSeleccionado = document.getElementById('estados').value;
  var partidos = Array.from(document.querySelectorAll("input[name=partido]:checked")).map(el => el.value);
  if (partidos.length > 0) {
    for (i = 0; i < listaDeMiembros.length; i++) {
      if ((partidos.indexOf(membersHouse[i].party) >= 0) && (estadoSeleccionado == membersHouse[i].state || estadoSeleccionado == "all")) {
        tablaFiltrada.push(membersHouse[i])
      }
    }
    imprimirTabla(tablaFiltrada);
  } else {
    document.getElementById("house-data").innerHTML = "SELECT A PARTY";
  };
}

document.getElementById("house-data").innerHTML = filtrarTabla(membersHouse);

//busco los estados repetidos
var mHouse = membersHouse.length;
var listaDeEstados = new Array(mHouse);
for (i = 0; i < mHouse; i++) {
  listaDeEstados[i] = membersHouse[i].state;
}

var arrayNoRepetidos = [];
var arrayTemporal = [];

listaDeEstados.forEach((value, index) => {
  arrayTemporal = Object.assign([], listaDeEstados); //Copiado de elemento
  arrayTemporal.splice(index, 1); //Se elimina el elemnto q se compara
  /**
   * Se busca en temporal el elemento, y en repetido para
   * ver si esta ingresado al array. indexOf returna
   * -1 si el elemento no se encuetra
   **/
  if (arrayTemporal.indexOf(value) != -1 && arrayNoRepetidos.indexOf(value) == -1) arrayNoRepetidos.push(value);
});
console.log (arrayNoRepetidos);


//Dibujo los option para el selected
function menuDesplegable(estadosNoRepetidos) {
  var states = "";

  for (i = 0; i < estadosNoRepetidos.length; i++) {
    states +=
      "<option value=" + estadosNoRepetidos[i] + ">" + estadosNoRepetidos[i] + "</option>"
  }
  return states;
}
document.getElementById("estados").innerHTML += menuDesplegable(arrayNoRepetidos);


 document.getElementById("house-data").innerHTML = imprimirTabla(membersHouse);

 function vermas(id) {
   if (id == "mas") {
     document.getElementById("desplegar").style.display = "block";
     document.getElementById("mas").style.display = "none";
   } else {
     document.getElementById("desplegar").style.display = "none";
     document.getElementById("mas").style.display = "inline";
   }
 }

  function crearLista(data, playerLogged) {
    var valor = '';

    console.log(playerLogged);
    for (var i = 0; i < data.length; i++) {

      valor += "<li>" + data[i].created + "<ul>" + "<h2 class=player>" + "Players:" + "</h2>";

      var gamePlayers = data[i].gamesPlayers;

      for (var j = 0; j < gamePlayers.length; j++) {

        //agrego link al gamePlayer
        var userLog = playerLogged.email;
        var playerGp = gamePlayers[j].player.email;
        var goToGame = document.getElementById("link");

        if (userLog == playerGp) {

          var gpId = gamePlayers[j].id;
        
        }

          console.log(gpId);

          //dibujo la tabla 
          var players = gamePlayers[j].player;
          valor += "<li>" + players.email + "</li>"


        }

        valor += '</ul></li>'

        $("#list").html(valor);

      }

    }



