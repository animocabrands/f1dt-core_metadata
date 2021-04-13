const Teams = require('../../Attributes/Team/Teams');

const NoDriver = {
  driverId: '0',
  name: 'None',
};
const DanielRicciardo = {
  driverId: '3',
  name: 'Daniel Ricciardo',
  team: Teams.RenaultF1Team.team,
  description:
    'Daniel Ricciardo is an Australian driver competing for Renault. With over 150 Formula 1 starts, in 2019 he will be aiming to win his 1000th F1 point.',
};
const LandoNorris = {
  driverId: '4',
  name: 'Lando Norris',
  team: Teams.McLarenF1Team.team,
  description: 'Lando Norris is a British driver competing for McLaren. A promising newcomer, 2019 will be his first season with Formula 1.',
};
const SebastianVettel = {
  driverId: '5',
  name: 'Sebastian Vettel',
  team: Teams.ScuderiaFerrari.team,
  description:
    'Sebastian Vettel is a German driver competing in his 5th season for Ferrari. He won four FIA Formula 1 Drivers World Championships between 2010 and 2014.',
};
const KimiRaikkonen = {
  driverId: '7',
  name: 'Kimi Räikkönen',
  imageName: 'KimiRaikkonen',
  team: Teams.AlfaRomeoRacing.team,
  description:
    'Kimi Räikkönen is a Finnish driver competing for Alfa Romeo Racing. After starting his F1 career with Sauber 19 years ago, in 2019 he will race in his 300th Formula 1 Grand Prix™.',
};
const RomainGrosjean = {
  driverId: '8',
  name: 'Romain Grosjean',
  team: Teams.HaasF1Team.team,
  description:
    'Romain Grosjean is a French-Swiss driver competing for Haas. With years of racing experience under his belt, 2019 will be his 9th season in Formula 1.',
};
const PierreGasly = {
  driverId: '10',
  name: 'Pierre Gasly',
  team: Teams.RedBullToroRossoHonda.team,
  description: 'Pierre Gasly is a French driver competing for Toro Rosso. This is only his third season in Formula 1.',
};
const SergioPerez = {
  driverId: '11',
  name: 'Sergio Pérez',
  imageName: 'SergioPerez',
  team: Teams.SpScoreRacingPointF1Team.team,
  description:
    'Sergio Pérez is a Mexican driver competing for Racing Point. A solid, analytical driver, this is his 6th season driving for Racing Point.',
};
const CharlesLeclerc = {
  driverId: '16',
  name: 'Charles Leclerc',
  team: Teams.ScuderiaFerrari.team,
  description:
    'Charles Leclerc is a Monegasque driver competing for Ferrari. A previous Formula 2 Champion, 2019 is his first season driving for Ferrari.',
};
const LanceStroll = {
  driverId: '18',
  name: 'Lance Stroll',
  team: Teams.SpScoreRacingPointF1Team.team,
  description:
    'Lance Stroll is a Canadian driver competing for Racing Point. In 2017 he became the youngest rookie to achieve a podium and at only 20 years old 2019 is already his third season of Formula 1.',
};
const KevinMagnussen = {
  driverId: '20',
  name: 'Kevin Magnussen',
  team: Teams.HaasF1Team.team,
  description: 'Kevin Magnussen is a Danish driver competing for Haas. He is the first Dane to achieve a podium finish in Formula 1.',
};
const AlexanderAlbon = {
  driverId: '23',
  name: 'Alexander Albon',
  team: Teams.AstonMartinRedBullRacing.team,
  description:
    'Alexander Albon is a British-Thai driver competing for Red Bull Racing. A confident overtaker, 2019 marks his first season in Formula 1.',
};
const DaniilKvyat = {
  driverId: '26',
  name: 'Daniil Kvyat',
  team: Teams.RedBullToroRossoHonda.team,
  description:
    'Daniil Kvyat is a Russian driver competing for Toro Rosso. He has an instictive ability to adapt to circuit conditions and will look to challenge for a podium place or two during 2019.',
};
const NicoHulkenberg = {
  driverId: '27',
  name: 'Nico Hülkenberg',
  imageName: 'NicoHulkenberg',
  team: Teams.RenaultF1Team.team,
  description: 'Nico Hülkenberg is a German driver competing for Renault. A strategic midfield driver, he earns solid points.',
};
const MaxVerstappen = {
  driverId: '33',
  name: 'Max Verstappen',
  team: Teams.AstonMartinRedBullRacing.team,
  description: 'Max Verstappen is a Dutch driver competing for Red Bull Racing. He is the youngest driver to earn points in F1 history.',
};
const LewisHamilton = {
  driverId: '44',
  name: 'Lewis Hamilton',
  team: Teams.MercedesAMGPetronasMotorsport.team,
  description:
    'Lewis Hamilton is a British driver competing for Mercedes. With 5 FIA Formula 1 Drivers World Championships he is one of the most successful drivers of all time.',
};
const CarlosSainz = {
  driverId: '55',
  name: 'Carlos Sainz',
  team: Teams.McLarenF1Team.team,
  description:
    'Carlos Sainz is a Spanish driver competing for McLaren. Never lacking in tenacity, in 2019 he will be seeking his first podium finish in Formula 1.',
};
const GeorgeRussell = {
  driverId: '63',
  name: 'George Russell',
  team: Teams.ROKiTWilliamsRacing.team,
  description:
    'George Russell is a British driver competing for Williams. He is the reigning FIA Formula 2 Champion and makes his debut for Formula 1 in 2019.',
};
const ValtteriBottas = {
  driverId: '77',
  name: 'Valtteri Bottas',
  team: Teams.MercedesAMGPetronasMotorsport.team,
  description: 'Valtteri Bottas is a Finnish driver competing for Mercedes. During his 3 years with Mercedes he has taken home 26 podiums.',
};
const RobertKubica = {
  driverId: '88',
  name: 'Robert Kubica',
  team: Teams.ROKiTWilliamsRacing.team,
  description: 'Robert Kubica is a Polish driver competing for Williams. In 2019 he returns to Formula 1 after an 8 year absence.',
};
const AntonioGiovinazzi = {
  driverId: '99',
  name: 'Antonio Giovinazzi',
  team: Teams.AlfaRomeoRacing.team,
  description: 'Antonio Giovinazzi is an Italian driver competing for Alfa Romeo Racing. 2019 will be his first full season in a Formula 1 seat.',
};

module.exports = {
  NoDriver,
  DanielRicciardo,
  LandoNorris,
  SebastianVettel,
  KimiRaikkonen,
  RomainGrosjean,
  PierreGasly,
  SergioPerez,
  CharlesLeclerc,
  LanceStroll,
  KevinMagnussen,
  AlexanderAlbon,
  DaniilKvyat,
  NicoHulkenberg,
  MaxVerstappen,
  LewisHamilton,
  CarlosSainz,
  GeorgeRussell,
  ValtteriBottas,
  RobertKubica,
  AntonioGiovinazzi,
};
