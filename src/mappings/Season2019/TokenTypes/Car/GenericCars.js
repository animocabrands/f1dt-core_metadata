const Models = require('../../Attributes/Model/Models');

const SatsumaCar = {
  name: 'Satsuma Car',
  model: Models.SatsumaModel.model,
  description:
    'Satsuma cars are backed by some of the best engineers around, crafters of premium machines, with near peerless engines. Every season you can guarantee that a Satsuma will be carrying some of the best technology available.',
};
const CarbonCar = {
  name: 'Carbon Car',
  model: Models.CarbonModel.model,
  description:
    'Carbon cars are known for being tirelessly maintained and tweaked every race, every season. Perfection is the pursuit, and the Carbon car takes steps towards it every season.',
};
const JetCar = {
  name: 'Jet Car',
  model: Models.JetModel.model,
  description:
    'Reliability and Jet go hand in hand. Although not the fastest on the grid, you can guarantee that a Jet car will always finish any Grand Prix® it enters.',
};
const TiburonCar = {
  name: 'Tiburon Car',
  model: Models.TiburonModel.model,
  description: 'The Tiburon car demonstrates the evolution of aerodynamics. It converts all air flow during a race into an advantage.',
};
const CloverCar = {
  name: 'Clover Car',
  model: Models.CloverModel.model,
  description:
    "Clover cars are known for a ruggedness that isn't often associated with the sport. But this moniker is accurate, as a Clover car will perform on any track in any weather and always finish.",
};
const RayCar = {
  name: 'Ray Car',
  model: Models.RayModel.model,
  description:
    'New to the grid, Ray cars are making an impression on the grid. They perform consistently with great speed and have a good track record for finishing races.',
};
const PlumeCar = {
  name: 'Plume Car',
  model: Models.PlumeModel.model,
  description:
    'Plume are another car known for reliability. Engineered to push boundaries and perform on the limits of racing, they consistently finish races.',
};
const SparkCar = {
  name: 'Spark Car',
  model: Models.SparkModel.model,
  description:
    'Not known to have the most innovative engineering, Spark cars are all about speed, especially when it comes to cornering. They race through turns at an unrivalled pace and challenge any car for pace on the straights.',
};
const CharCar = {
  name: 'Char Car',
  model: Models.CharModel.model,
  description:
    'The chassis of a Char has seen every track many times over. It can be relied upon to consistently deliver speed and results. Fast, agile, and sturdy, it stays around for a reason.',
};
const FossilCar = {
  name: 'Fossil Car',
  model: Models.FossilModel.model,
  description:
    'Drivers say that Fossil cars seem to "behave". They\'re agile and able to dance to the whim of the driver. It\'s easy to look good when behind the wheel of the Fossil.',
};

module.exports = {SatsumaCar, CarbonCar, JetCar, TiburonCar, CloverCar, RayCar, PlumeCar, SparkCar, CharCar, FossilCar};
