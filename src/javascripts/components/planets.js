const planets = [
  {
    name: 'Mercury',
    imageUrl: '../../../images/falsecolormercury.png',
    description: 'It is the closest planet to the sun, so it orbits the sun very quickly just in 88 days. Its surface is gray to orange in color and it is covered with craters.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'Venus',
    imageUrl: '../../../images/globalmodelvenus.jpg',
    description: 'Venus is the second planet from the Sun and the third brightest object in Earths sky after the Sun and Moon. Its size is a little over 12,000 kilometers (7300 miles) in diameter.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a,',
  },
  {
    name: 'Earth',
    imageUrl: '../../../images/a-sky-view-of-earth_medium.jpg',
    description: 'Earth is the third planet from the Sun and largest of the terrestrial planets. It rotates the sun every 365 days (year) and rotates in its axis every 24 hours (day).',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'the Moon',
  },
  {
    name: 'Mars',
    imageUrl: '../../../images/sharpesthubblemars.jpg',
    description: 'Mars is the fourth planet from the Sun and last of the terrestrial planets. Mars is sometimes called the Red Planet because of the brownish-red color of its surface.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: '../../../images/marblejupiter.jpg',
    description: 'Jupiter is named after the Roman king of the gods. Jupiter is easily the largest and most massive planet in the Solar System. It orbits the sun every 12 years.',
    isGasPlanet: true,
    numberOfMoons: 67,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: '../../../images/saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and second largest planet of the Solar System. Saturn was named after the father of the god Jupiter in Roman mythology.',
    isGasPlanet: true,
    numberOfMoons: 62,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: '../../../images/uranushubble.jpg',
    description: 'Uranus, named after the the father of the Roman god Saturn. It takes Uranus 84 Earth days to orbit the Sun.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Oberon',
  },
  {
    name: 'Neptune',
    imageUrl: '../../../images/bleneptune.jpg',
    description: 'Neptune is the eighth planet from the Sun and last of the known planets. Neptune was named after the Roman god of the Sea. It takes Neptune 164.8 Earth years to orbit the Sun.',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
