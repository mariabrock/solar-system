import 'bootstrap';
import '../styles/main.scss';
import cardList from './components/cardList/cardList';
import p from './components/planets';

const init = () => {
  const planets = p.getPlanets();
  cardList.cardListBuilder(planets);
  cardList.cardListEvents(planets);
};

init();
