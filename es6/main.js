/* globals L */

import L from 'leaflet';
import Faker from 'Faker';
import async from 'async';
import 'leaflet/dist/leaflet.css';
import './main.css';

const map = L.map('map').setView([38.89, -77.09], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

async.times(10000, () => {
  const marker = L.marker([Faker.Address.latitude(), Faker.Address.longitude()]);
  marker.addTo(map);
});
