// var url = "/";
// var fire;
// function buildMap() {
//     /* data route */
//   d3.json(url, function(response) {

//     console.log(response);

//     fire = response[0];
//     console.log(fire);
//     var fireLocations = [];

//     for (var i = 0; i < 5000; i++) {
//       fireLocations.push(
//         L.marker([fire.lat[i], fire.lng[i]]).bindPopup("<h1>" + fire.text[i] + "</h1>")
//       );
//     }

//     var fireLayer = L.layerGroup(fireLocations);


//     var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "mapbox.streets",
//       accessToken: "pk.eyJ1IjoicHNhbmRlIiwiYSI6ImNqcGZuMHdxbTBjMHozd25iN3ZzanZueTMifQ.SbtA3M7Uc5ctgBZVuhvJIA"
//     });

//     var baseMaps = {
//       "Streets": street
//     };

//     var overlayMaps = {
//       "Fires": fireLayer
//     };

//     var myMap = L.map("map", {
//       center: [37.7749, -122.4194],
//       zoom: 6,
//       layers: [street, fireLayer]
//     });

//     L.control.layers(baseMaps, overlayMaps).addTo(myMap);

//   })
// };
// buildMap();
// Creating map object
// var map = L.map("map", {
//   center: [40.7128, -74.0059],
//   zoom: 11
// });

// // Adding tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: "pk.eyJ1IjoicHNhbmRlIiwiYSI6ImNqcGZuMHdxbTBjMHozd25iN3ZzanZueTMifQ.SbtA3M7Uc5ctgBZVuhvJIA"
// }).addTo(map);



// // Grabbing our GeoJSON data..
// d3.json(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data).addTo(map);
// });