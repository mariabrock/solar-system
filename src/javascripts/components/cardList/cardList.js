import utilities from '../../helpers/utilities';
import './cardList.scss';

const cardListBuilder = (planets) => {
  let domString = '';
  planets.forEach((planet) => {
    domString += '<div class="card text-white bg-dark mb-3" style="width: 18rem; height: 18rem;">';
    domString += '<div class="card-body">';
    domString += `<h1 class="card-title">${planet.name}</h1>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('planet-cards', domString);
};

export default { cardListBuilder };
