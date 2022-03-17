const MonacoTrackSegment = (eventSeason) => {
  const description =
    'The illustrious FORMULA 1 GRAND PRIX DE MONACO is laid out on the city streets of Monte Carlo and La Condamine in the principality of Monaco. The FORMULA 1 GRAND PRIX DE MONACO has been on the Formula 1 calendar since its inception in 1950 and is considered one of the most glamorous and prestigious events in the sport.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Grand Prix de Monaco 2021',
        description: description,
      };
    default:
      return {
        name: 'Formula 1 Grand Prix de Monaco 2020',
        description: description,
      };
  }
};
const BelgiumTrackSegment = (eventSeason) => {
  const description =
    'Set in 300 acres of forest in the mountains of Belgium, Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Rolex Belgian Grand Prix 2021',
        description: description,
      };
    default:
      return {
        name: 'Formula 1 Rolex Grand Prix de Spa-Francorchamps 2020',
        description: description,
      };
  }
};

const GreatBritainTrackSegment = (eventSeason) => {
  const description =
    'The FORMULA 1 BRITISH GRAND PRIX is “the local“ for the majority of Formula 1® teams, many of whom are based in the UK. As the event draws in, union jacks spread far and wide, with the race weekend bringing together motorsport legends and fans to celebrate heroes present and past.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Pirelli British Grand Prix 2021',
        description: description,
      };
    default:
      return {
        name: 'Formula 1 Pirelli British Grand Prix 2020',
        description: description,
      };
  }
};

const ItaliaTrackSegment = (eventSeason) => {
  switch (eventSeason) {
    case '2021':
      return {
        name: "Formula 1® Gran Premio d'Italia 2021",
        description: "A little trip north of Milan will bring you to a rather iconic F1® circuit, otherwise known as the “Temple of Speed”. Having hosted the Italian Grand Prix™ from as early as 1922, the Autodromo Nazionale di Monza, will not only be a proving ground for your car’s sheer pace, but will undoubtedly test your accuracy when it comes to braking.",
      };
    default:
      return {
        name: 'Formula 1® Autodromo Nazionale di Monza 2020',
        description: "A feature of the Formula 1® calendar since 1950, the FORMULA 1 GRAN PREMIO D'ITALIA provides a platform for the sheer speed of Formula 1 cars. To win at the Autodromo Nazionale di Monza, affectionately known as the “Temple of Speed,” is to win the respect of the Tifosi, whose passion can be heard and felt for miles around the historic circuit. During a Grand Prix™ weekend, the town comes alive with a fiery spirit and the united love for motorsport.",
      };
  }
};

const ChinaTrackSegment = (eventSeason) => {
  const description =
    'One of the newest Grand Prix™ to grace the calendar, the FORMULA 1 CHINESE GRAND PRIX opens a window to a world where the drivers and teams are worshiped, and burning rubber reigns supreme. While the sport continues to bloom in the region, there is no doubt that the local scene is passionate and growing fast.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Chinese Grand Prix 2021',
        description: description,
      };
    default:
      return {
        name: 'Formula 1 Chinese Grand Prix 2020',
        description: description,
      };
  }
};

const BahrainTrackSegment = (eventSeason) => {
  const description =
    'In the heart of the Sakhir desert, the FORMULA 1 BAHRAIN GRAND PRIX is a spectacle under the stars. It’s a clash of kings, lit up by floodlights, as royalty from around the world meet and mingle with generations of racing royalty. There’s plenty to do around the archipelago, as you spend the days touring temples or diving for pearls. Come nightfall however, attention turns to the 20 fastest drivers in the world, as they take to the track for a duel in the desert.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Bahrain Grand Prix 2021',
        description: description,
      };
    default:
      // This should not exist
      return {
        name: '',
        description: '',
      };
  }
};

const AustraliaTrackSegment = (eventSeason) => {
  const description =
    'Melbourne, the cultural melting pot down under is the home of the FORMULA 1 AUSTRALIAN GRAND PRIX. For one week a year in the “Aussie Summer”, Australia plays host to the fastest race cars in the world. Barbecues and beef pies often find their place around the park, with fans enjoying the sun on picnic blankets as their racing heroes battle wheel to wheel.';
  switch (eventSeason) {
    case '2021':
      return {
        name: 'Formula 1 Australian Grand Prix 2021',
        description: description,
      };
    default:
      // This should not exist
      return {
        name: '',
        description: '',
      };
  }
};

module.exports = {
  MonacoTrackSegment,
  BelgiumTrackSegment,
  GreatBritainTrackSegment,
  ItaliaTrackSegment,
  ChinaTrackSegment,
  BahrainTrackSegment,
  AustraliaTrackSegment,
};
