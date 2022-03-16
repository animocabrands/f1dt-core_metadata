const Models = require('../../Attributes/Model/Models');

const RiptideDriver = {
  name: Models.RiptideModel.model + ' Driver',
  model: Models.RiptideModel.model,
  description: 'A Riptide driver will not be forced into error, and not through caution, but through pure race intelligence.',
};
const SaberDriver = {
  name: Models.SaberModel.model + ' Driver',
  model: Models.SaberModel.model,
  description: 'Defensive specialists who are able to cover the line. Saber drivers are going to be one of the fastest on the track.',
};
const CosmoDriver = {
  name: Models.CosmoModel.model + ' Driver',
  model: Models.CosmoModel.model,
  description: 'Driving intelligence and positional sense give Cosmo drivers an awareness of every part of the circuit during a race.',
};
const SpecterDriver = {
  name: Models.SpecterModel.model + ' Driver',
  model: Models.SpecterModel.model,
  description: "There one minute, gone the next - Specter drivers come with speed. They'll always challenge to increase their position in the race.",
};
const PythonDriver = {
  name: Models.PythonModel.model + ' Driver',
  model: Models.PythonModel.model,
  description: "Never one to be challenged by the car they're driving, the Python driver adapts with ease and can make any car faster.",
};
const HornetDriver = {
  name: Models.HornetModel.model + ' Driver',
  model: Models.HornetModel.model,
  description: 'Aggressive drivers with a ruthless streak. Never let your guard down around a Hornet, or be prepared to lose your place to them.',
};
const ShutdownDriver = {
  name: Models.ShutdownModel.model + ' Driver',
  model: Models.ShutdownModel.model,
  description: "In tune with their car, adaptable to changes, Shutdown drivers aren't phased by what a race may throw at them.",
};
const EmpressDriver = {
  name: Models.EmpressModel.model + ' Driver',
  model: Models.EmpressModel.model,
  description: "Steely, impossible to face. It doesn't matter if it's the first lap, or the last, the Empress driver will be ready to move.",
};
const TalonDriver = {
  name: Models.TalonModel.model + ' Driver',
  model: Models.TalonModel.model,
  description: 'Sharp and aware, Talon drivers are skilled overtakers and can defend and attack in equal measure. ',
};
const WrathDriver = {
  name: Models.WrathModel.model + ' Driver',
  model: Models.WrathModel.model,
  description: "Fast in practice, fast in qualifying, fast during the race. Whatever the situation, they're going to be on the pace.",
};

module.exports = {
  RiptideDriver,
  SaberDriver,
  CosmoDriver,
  SpecterDriver,
  PythonDriver,
  HornetDriver,
  ShutdownDriver,
  EmpressDriver,
  TalonDriver,
  WrathDriver,
};
