import { series } from './data.js';
const seriesTbody = document.getElementById('series-table-body');
const seriesDetailDiv = document.getElementById('series-detail');
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
renderSeriesInTable(series);
const avgSeasonDiv = document.getElementById('average-seasons');
avgSeasonDiv.innerHTML = `Seasons Average: ${getAverageSeasons(series).toFixed(2)}`;
