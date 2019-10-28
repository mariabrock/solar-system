import $ from 'jquery';
import utilities from '../../helpers/utilities';
import p from '../planets';
import './largeCard.scss';

const largeCardBuilder = (planet) => {
  let domString = '';
  domString = '<div class="card">';
  domString = `<img src="${planet.imageUrl}" class="card-img-top">`;
  domString = '<div class="card-body">';
  domString = `<h5 class="card-title">${planet.name}</h5>`;
  domString = `<p class="card-text" id ="description">${planet.description}.</p>`;
  domString = `<p class="card-text" id="moon-info">${planet.name} has ${planet.numberOfMoons}.</p>`;
  domString = '</div>';
  domString = '</div>';
  utilities.printToDom('large-card', domString);
};

const largeCardEvent = () => {
  $('body').on('click', '.card', (e) => {
    const planetName = $(e.target).closest('.card')[0].id;
    console.error('you clicked!', planetName);
    const foundPlanet = $(p).find(planetName);
    (foundPlanet === planetName).on('click', '#planet-cards').addClass('hide');
    $('#large-card').on('click').removeClass('hide');
  });
  largeCardBuilder();
};
// $('#planet-cards').addClass('hide');
  // $('#large-card').on('click').removeClass('hide');


export default { largeCardBuilder, largeCardEvent };
