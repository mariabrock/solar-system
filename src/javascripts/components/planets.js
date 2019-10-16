const planets = [
  {
    name: 'Mercury',
    imageUrl: '../../../images/falsecolormercury.png',
    description: 'It is the closest planet to the sun, so it orbits the sun very quickly just in 88 days. Its surface is gray to orange in color and it is covered with craters.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a'
  },
  {
    name: 'Venus',
    imageUrl: '../../../images/globalmodelvenus.jpg',
    description: 'Venus is the second planet from the Sun and the third brightest object in Earths sky after the Sun and Moon. Its size is a little over 12,000 kilometers (7300 miles) in diameter.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a'
  },
  {
    name: 'Earth',
    imageUrl: '../../../images/a-sky-view-of-earth_medium.jpg',
    description: 'Earth is the third planet from the Sun and largest of the terrestrial planets. Surprisingly, while it is only the fifth largest planet in terms of size and mass, it is the densest (5,513 kg/m3) of all the planets. Earth is the only planet in the solar system not named after a mythological being. Instead, its name is derived from the Old English word "ertha" and the Anglo-Saxon word "erda" which means ground or soil. Earth was formed somewhere around 4.54 billion years ago and is currently the only known planet to support life - and lots of it. It rotates the sun every 365 days (year) and rotates in its axis every 24 hours (day).',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'the Moon'
  },
  {
    name: 'Mars',
    imageUrl: '../../../images/sharpesthubblemars.jpg',
    description: 'Mars is the fourth planet from the Sun and last of the terrestrial planets. Like the rest of the planets in the solar system (except Earth), Mars is named after a mythological figure - the Roman god of war. In addition to its official name, Mars is sometimes called the Red Planet because of the brownish-red color of its surface. Mars is the second smallest planet in the solar system behind Mercury. It takes 687 days to revolve around the sun. Its surface is covered with craters, volcanoes, and large canyons and it has a very cold atmosphere. Phobos and Diemos are the moons of Mars.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos'
  },
  {
    name: 'Jupiter',
    imageUrl: '../../../images/marblejupiter.jpg',
    description: 'Named after the Roman king of the gods, Jupiter is fitting of its name. With a mass of 1.90 x 1027 kg and a mean diameter of 139,822 km, Jupiter is easily the largest and most massive planet in the Solar System. To put this in perspective, it would take 11 Earths lined up next to each other to stretch from one side of Jupiter to the other and it would take 317 Earths to equal the mass of Jupiter. It orbits the sun every 12 years.',
    isGasPlanet: true,
    numberOfMoons: 67,
    nameOfLargestMoon: 'Ganymede'
  },
  {
    name: 'Saturn',
    imageUrl: '../../../images/saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and second largest planet of the Solar System in terms of diameter and mass. If compared, it is easy to see why Saturn and Jupiter have been designated as relatives. From atmospheric composition to rotation, these two planets are extremely similar. Because of these factors, Saturn was named after the father of the god Jupiter in Roman mythology.',
    isGasPlanet: true,
    numberOfMoons: 62,
    nameOfLargestMoon: 'Titan'
  },
  {
    name: 'Uranus',
    imageUrl: '../../../images/uranushubble.jpg',
    description: 'Uranus, named after the the father of the Roman god Saturn, is the seventh planet in the Solar System and third of the gas giants. It is the third largest planet by diameter, yet fourth most massive.Uranus rotates on its axis once every 17 hours and 14 minutes. Like Venus, it turns in a retrograde direction which is opposite to the direction Earth and the other six planets turn. It takes Uranus 84 Earth days to orbit the Sun. Its axis is at 98 degrees, which means it almost lies sideways as it orbits the Sun. This means that the north and south poles of Uranus lie near where the equator is on Earth. During parts of its orbit one or other of the poles directly face the Sun which means the planet gets around 42 years of direct sunlight followed by 42 years of darkness.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Oberon'
  },
  {
    name: 'Neptune',
    imageUrl: '../../../images/bleneptune.jpg',
    description: 'Neptune is the eighth planet from the Sun and last of the known planets. While it is the third largest planet with respect to mass, it is only the fourth largest in terms of diameter. Due to its blue coloration, Neptune was named after the Roman god of the Sea. It takes Neptune 164.8 Earth years to orbit the Sun. On 11 July 2011, Neptune completed its first full orbit since its discovery in 1846. Neptune was discovered by Jean Joseph Le Verrier. The planet was not known to ancient civilizations because it is not visible to the naked eye. The planet was initially called Le Verrier after its discoverer. This name, however, quickly was abandoned and the name Neptune was chosen instead.',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton'
  },
];

// individaul card, card list, 

domstring = '';
domString += `<div class="card-group">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Mercury</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Venus</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Earth</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Mars</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Jupiter</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Saturn</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Uranus</h5>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Neptune</h5>
  </div>
</div>
</div>
`;
