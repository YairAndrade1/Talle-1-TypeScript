import { series } from './data.js';
import { Serie } from './serie.js';

const seriesTbody: HTMLElement = document.getElementById('series-table-body')!;
const seriesDetailDiv: HTMLElement = document.getElementById('series-detail')!;

function renderSeriesInTable(series: Serie[]): void {
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

function getAverageSeasons(series: Serie[]): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  return totalSeasons / series.length;
}

renderSeriesInTable(series);

const avgSeasonDiv: HTMLElement = document.getElementById('average-seasons')!;
avgSeasonDiv.innerHTML = `Seasons Average: ${getAverageSeasons(series).toFixed(2)}`;
