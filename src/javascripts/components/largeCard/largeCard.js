import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './largeCard.scss';

const largeCardBuilder = (planets) => {
  let domString = '';
  planets.forEach((planet) => {
    domString = `<div class="card hide" id="${planet.name}">`;
    domString = `<img src="${planet.imageUrl}" class="card-img-top">`;
    domString = '<div class="card-body">';
    domString = `<h5 class="card-title">${planet.name}</h5>`;
    domString = `<p class="card-text" id ="description">${planet.description}.</p>`;
    domString = `<p class="card-text" id="moon-info">${planet.name} has ${planet.numberOfMoons}.</p>`;
    domString = '</div>';
    domString = '</div>';
  });
  utilities.printToDom('large-card', domString);
};

const largeCardEvent = () => {
  $('body').on('click', () => {
    utilities.printToDom('small-card', '');
  });
  console.error('click');
};

export default { largeCardBuilder, largeCardEvent };
