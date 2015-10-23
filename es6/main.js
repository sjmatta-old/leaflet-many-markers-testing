/* globals L */

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './main.css';

const map = Leaflet.map('map').setView([51.505, -0.09], 13);

Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
