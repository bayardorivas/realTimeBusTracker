

const btnMove = document.getElementById("btnmove");
const btnreset = document.getElementById("btnreset");

// Keys 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmF5YXJkb3JpdmFzIiwiYSI6ImNsMnhqbmhxdTA3bTIzYm1sdjlzOGczdDcifQ.Il4y99R7_QdWhYIgZBc_bQ';

// Creando una nueva instancia de Mapa de la biblioteca Mapbox
var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.104081,42.365554],
        zoom: 13,
    });

var marker = new mapboxgl.Marker({
    color: '#264653' 
    })
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);

    // Coordenadas de las parada de bus para llegar de MIT -> Harvard Campus
const busStops = [
     [-71.093729, 42.359244],
     [-71.094915, 42.360175],
     [-71.095800, 42.360698],
     [-71.099558, 42.362953],
     [-71.103476, 42.365248],
     [-71.106067, 42.366806],
     [-71.108717, 42.368355],
     [-71.110799, 42.369192],
     [-71.113095, 42.370218],
     [-71.115476, 42.372085],
     [-71.117585, 42.373016],
     [-71.118625, 42.374863]
  ];
   
  var counter = 0;

  // Función que se encarga de mover el marcador por las diferentes coordenadas
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000)
}

function reset() {
  marker.setLngLat([-71.092761, 42.357575]);
  counter = 0;
}

  btnMove.addEventListener("click", move);
  btnreset.addEventListener("click", reset);