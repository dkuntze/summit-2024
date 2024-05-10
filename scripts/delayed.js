// eslint-disable-next-line import/no-cycle
import { loadScript, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

await loadScript('https://www.gstatic.com/charts/loader.js', { defer: true });

google.charts.load('current', {
  packages: ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  const data = google.visualization.arrayToDataTable([
    ['Country', 'Attendees / Registrants'],
    ['Germany', 24],
    ['United States', 237],
    ['Brazil', 3],
    ['Japan', 11],
    ['Canada', 21],
    ['France', 4],
    ['Argentina', 1],
    ['India', 20],
    ['Spain', 2],
    ['Italy', 7],
    ['Australia', 3],
    ['United Kingdom', 17],
    ['South Africa', 1],
    ['Uruguay', 2],
    ['Belgium', 1],
    ['Austria', 4],
  ]);

  const options = {};
  const chart = new google.visualization.GeoChart(document.querySelector('.infographic'));

  chart.draw(data, options);
}
