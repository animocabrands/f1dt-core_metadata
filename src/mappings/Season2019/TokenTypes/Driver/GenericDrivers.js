const Models = require('../../Attributes/Model/Models');

const SatsumaDriver = {
  name: 'Satsuma Driver',
  model: Models.SatsumaModel.model,
  description: 'The Satsuma driver never appears to be under pressure, racing with a calm head and never rushing to make a move.',
};
const CarbonDriver = {
  name: 'Carbon Driver',
  model: Models.CarbonModel.model,
  description: '"Attack" is the word of the Carbon driver. They\'ll never miss an opportunity to try and overtake, regardless of risk.',
};
const JetDriver = {
  name: 'Jet Driver',
  model: Models.JetModel.model,
  description: 'Jet drives with their heart on their sleeve. It can lead to recklessness as much as it can to glory.',
};
const TiburonDriver = {
  name: 'Tiburon Driver',
  model: Models.TiburonModel.model,
  description: 'You will always see a Tiburon driver putting in quick times, qualifying well, and grabbing podiums.',
};
const CloverDriver = {
  name: 'Clover Driver',
  model: Models.CloverModel.model,
  description:
    'Regardless of the season, weather or car, the Clover driver sets the benchmark for speed. Tearing through the warm-up sessions, and constantly setting record splits.',
};
const RayDriver = {
  name: 'Ray Driver',
  model: Models.RayModel.model,
  description:
    "The Ray driver is a qualifying specialist. Always assured to deliver quick times and high grid placement, especially when the car is set-up with hot tyres and a lap's worth of fuel.",
};
const PlumeDriver = {
  name: 'Plume Driver',
  model: Models.PlumeModel.model,
  description: 'When the skies open, the Plume driver is in their element. This driver relishes a change in the weather mid-race.',
};
const SparkDriver = {
  name: 'Spark Driver',
  model: Models.SparkModel.model,
  description:
    "The Spark driver relishes a track stacked with turns. Throw them a chicane or hairpin, and they'll be sure to take it on with the aggression that some would only show a straight.",
};
const CharDriver = {
  name: 'Char Driver',
  model: Models.CharModel.model,
  description:
    'Few are as complete and skilled as the Char driver. Composed, but not reserved. They attack, but do so without danger ever being present.',
};
const FossilDriver = {
  name: 'Fossil Driver',
  model: Models.FossilModel.model,
  description:
    'They have the tools to become great. The Fossil driver is always fast and knows when to be aggressive. Experience is the only thing they lack, but it rarely shows.',
};

module.exports = {
  SatsumaDriver,
  CarbonDriver,
  JetDriver,
  TiburonDriver,
  CloverDriver,
  RayDriver,
  PlumeDriver,
  SparkDriver,
  CharDriver,
  FossilDriver,
};
