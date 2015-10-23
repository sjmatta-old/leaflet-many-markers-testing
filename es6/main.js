import L from 'leaflet';
import {PruneCluster, PruneClusterForLeaflet} from 'PruneCluster/dist/PruneCluster';
import faker from 'faker';
import async from 'async';
import _ from 'lodash';
import 'leaflet/dist/leaflet.css';
import 'PruneCluster/dist/LeafletStyleSheet.css';
import './main.css';

const map = L.map('map').setView([38.89, -77.09], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

const pruneCluster = new PruneClusterForLeaflet();

_.times(100000, () => {
  pruneCluster.RegisterMarker(new PruneCluster.Marker(faker.address.latitude(), faker.address.longitude()));
});

map.addLayer(pruneCluster);
