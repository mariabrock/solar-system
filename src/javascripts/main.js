import 'bootstrap';
import '../styles/main.scss';
import cardList from './components/cardList/cardList';
import p from './components/planets';
import largeCard from './components/largeCard/largeCard';

const init = () => {
  const planets = p.getPlanets();
  cardList.cardListBuilder(planets);
  cardList.cardListEvents(planets);
  largeCard.largeCardBuilder(planets);
  // largeCard.largeCardEvent(planets);
};

init();
