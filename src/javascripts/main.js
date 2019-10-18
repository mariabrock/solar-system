import 'bootstrap';
import '../styles/main.scss';
import cardList from './components/cardList/cardList';
import p from './components/planets';

const init = () => {
  // cardList.cardListEvents();
  const planets = p.getPlanets();
  cardList.cardListBuilder(planets);
};

init();
