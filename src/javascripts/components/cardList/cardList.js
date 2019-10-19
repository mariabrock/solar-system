import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './cardList.scss';

const cardListBuilder = (planets) => {
  let domString = '';
  planets.forEach((planet) => {
    domString += '<div class="card text-white bg-dark mb-3">';
    domString += '<div class="card-body">';
    domString += `<h1 class="card-title">${planet.name}</h1>`;
    domString += `<img class="card-img-top hide" id="pic" src=${planet.imageUrl}></img>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('planet-cards', domString);
};

const cardListEvents = () => {
  $('body').on('mouseenter', '.card', (planet) => {
    $(planet.target).children('img').removeClass('hide');
    $(planet.target).children('h1').addClass('hide');
  });

  $('body').on('mouseleave', '.card', (planet) => {
    $(planet.target).children('img').addClass('hide');
    $(planet.target).children('h1').removeClass('hide');
  });

  // $('body').on('click', '.card', () => {
  //   utilities.printToDom('color-list', '');
  //   utilities.printToDom('single-color', 'this is a single item.  maybe we should call another component?');
  // });
};

export default { cardListBuilder, cardListEvents };
