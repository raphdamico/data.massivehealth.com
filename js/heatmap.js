window.createMap = function() {

var po = org.polymaps;

// Create all of the layers from the configuration information that was
// previous loaded in heatmap_config.js

// All in the array config
var filenamePrefix = '../images/';
var layers = []

config.forEach(function(layer_config) {
  layers.push({
    name: layer_config.name,
    layer: po.layer(createOverlay(filenamePrefix + layer_config.filename)).tile(false).visible(false)
  })
})

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .add(po.drag())
    .add(po.wheel());
    //.add(po.hash());

var STYLE = 58930;//26250 // Cloudmade map style ID -see http://maps.cloudmade.com/editor

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/ecf4ba6fd1394481ac30f77082d3aab2" // http://cloudmade.com/register
    + "/" + STYLE + "/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

// map.add(po.image()
//     .url(po.url("http://{S}tile.cloudmade.com"
//     + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
//     + "/999/256/{Z}/{X}/{Y}.png")
//     .hosts(["a.", "b.", "c.", ""])));



// Add all of the layers
$(layers.forEach(function(layer) {
  map.add(layer.layer)
}))

var currentLayer = 0;
// Only make one of them visible
layers[0].layer.visible(true)
$('#label').text(layers[currentLayer].name)

map.add(po.compass()
    .pan("none"));

$('#map').click(function() {

  layers[currentLayer].layer.visible(false)
  currentLayer += 1
  currentLayer = currentLayer % layers.length
  layers[currentLayer].layer.visible(true)
  $('#label').text(layers[currentLayer].name)
})


function createOverlay(filename) {
  var overlayFunc = function(tile, proj) {
    proj = proj(tile);
    var tl = proj.locationPoint({lon: MIN_LON, lat: MAX_LAT}),
        br = proj.locationPoint({lon: MAX_LON, lat: MIN_LAT}),
        image = tile.element = po.svg("image");


    image.setAttribute("preserveAspectRatio", "none");
    image.setAttribute("x", tl.x);
    image.setAttribute("y", tl.y);
    image.setAttribute("width", br.x - tl.x);
    image.setAttribute("height", br.y - tl.y);
    image.setAttributeNS("http://www.w3.org/1999/xlink", "href", filename);
  }
  return overlayFunc
}

// * A lightweight layer implementation for an image overlay.
// function createDarkness() {
//   var overlayFunc = function(tile, proj) {
//     proj = proj(tile);
//     var tl = proj.locationPoint({lon: MIN_LON, lat: MAX_LAT}),
//         br = proj.locationPoint({lon: MAX_LON, lat: MIN_LAT}),
//         image = tile.element = po.svg("image");
//     image.setAttribute("preserveAspectRatio", "none");
//     image.setAttribute("x", tl.x);
//     image.setAttribute("y", tl.y);
//     image.setAttribute("width", br.x - tl.x);
//     image.setAttribute("height", br.y - tl.y);
//     image.setAttributeNS("http://www.w3.org/1999/xlink", "href", "darkness.png");
//   }
//   return overlayFunc
// }

// var darkLayer = po.layer(createDarkness()).tile(false).visible(true);


layers[24].layer.visible(true);

var transform = po.transform(100, 100, 100, 100, 1, 1);

var hour = 1;
var newHour = 1;
$(window).mousemove(function(e) {
    if (window.scrollY < 1000) {
      var newValue = (e.pageX) / window.innerWidth;
      var newHour = Math.floor(newValue * 24);

      if (hour !== newHour) {
        layers[hour].layer.visible(false);
        layers[newHour].layer.visible(true);
        hour = newHour;
        $('.intro_time_output').text(hour + ':00');
      }

      // console.log(map.zoom());
      // console.log('asfas', $(layers[24].layer.container()).find('image')[0]);
      MAX = 800 / 2;
      MIN = -MAX;
      //$(layers[24].layer.container()).find('image')[0].setAttribute("x", newValue * window.innerWidth * map.zoom());
    }
});
}