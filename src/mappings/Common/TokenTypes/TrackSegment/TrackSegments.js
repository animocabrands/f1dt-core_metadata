const Rarities = require('../../Attributes/Rarity/Rarities');

//The key is based on rarity
const monacoTrackName = 'Formula 1 Grand Prix de Monaco 2020';
const monacoTrackDesc =
  'The illustrious FORMULA 1 GRAND PRIX DE MONACO is laid out on the city streets of Monte Carlo and La Condamine in the principality of Monaco. The FORMULA 1 GRAND PRIX DE MONACO has been on the Formula 1 calendar since its inception in 1950 and is considered one of the most glamorous and prestigious events in the sport.';
const MonacoTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: monacoTrackName,
        description: monacoTrackDesc,
      };
  }
};

const belgiumTrackName = 'Formula 1 Rolex Grand Prix de Spa-Francorchamps 2020';
const belgiumTrackDesc =
  'Set in 300 acres of forest in the mountains of Belgium, Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
const BelgiumTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: belgiumTrackName,
        description: belgiumTrackDesc,
      };
  }
};

const silverstoneTrackName = 'Formula 1 Pirelli British Grand Prix 2020';
const silverstoneTrackDesc =
  'The FORMULA 1 BRITISH GRAND PRIX is “the local“ for the majority of Formula 1® teams, many of whom are based in the UK. As the event draws in, union jacks spread far and wide, with the race weekend bringing together motorsport legends and fans to celebrate heroes present and past.';
const SilverstoneTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: silverstoneTrackName,
        description: silverstoneTrackDesc,
      };
  }
};

const monzaTrackName = "Formula 1 Gran Premio Heineken d'Italia 2020";
const monzaTrackDesc =
  "A feature of the Formula 1® calendar since 1950, the FORMULA 1 GRAN PREMIO D'ITALIA provides a platform for the sheer speed of Formula 1 cars. To win at the Autodromo Nazionale di Monza, affectionately known as the “Temple of Speed,” is to win the respect of the Tifosi, whose passion can be heard and felt for miles around the historic circuit. During a Grand Prix™ weekend, the town comes alive with a fiery spirit and the united love for motorsport.";
const MonzaTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: monzaTrackName,
        description: monzaTrackDesc,
      };
  }
};

const shanghaiTrackName = 'Formula 1 Chinese Grand Prix 2020';
const shanghaiTrackDesc =
  'One of the newest Grand Prix™ to grace the calendar, the FORMULA 1 CHINESE GRAND PRIX opens a window to a world where the drivers and teams are worshiped, and burning rubber reigns supreme. While the sport continues to bloom in the region, there is no doubt that the local scene is passionate and growing fast.';
const ShanghaiTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: shanghaiTrackName,
        description: shanghaiTrackDesc,
      };
  }
};

const bahrainTrackName = 'Formula 1 Bahrain Grand Prix 2021';
const bahrainTrackDesc = '';
const BahrainTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: bahrainTrackName,
        description: bahrainTrackDesc,
      };
  }
};

const australiaTrackName = 'Formula 1 Rolex Australia Grand Prix 2021';
const australiaTrackDesc = '';
const AustraliaTrackSegments = (rarity) => {
  switch (rarity) {
    default:
      return {
        name: australiaTrackName,
        description: australiaTrackDesc,
      };
  }
};

module.exports = {
  MonacoTrackSegments,
  BelgiumTrackSegments,
  SilverstoneTrackSegments,
  MonzaTrackSegments,
  ShanghaiTrackSegments,
  BahrainTrackSegments,
  AustraliaTrackSegments,
};
