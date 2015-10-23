import L from 'imports?L=leaflet!exports?L!leaflet.markercluster';
import faker from 'faker';
import async from 'async';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './main.css';

const map = L.map('map').setView([38.89, -77.09], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const updateProgressBar = (processed, total, elapsed) => {
  if (elapsed > 1000) {
    progress.style.display = 'block';
    progressBar.style.width = Math.round(processed / total * 100) + '%';
  }
  if (processed === total) {
    progress.style.display = 'none';
  }
};

const markerCluster = L.markerClusterGroup({
  animateAddingMarkers: true, // this can be disabled if it impacts performance
  chunkedLoading: true,
  chunkProgress: updateProgressBar,
});

map.addLayer(markerCluster);

async.times(50000, (n, callback) => {
  return async.nextTick(() => {
    callback(null, L.marker([faker.address.latitude(), faker.address.longitude()]));
  });
}, (err, markers) => {
  markerCluster.addLayers(markers);
});
