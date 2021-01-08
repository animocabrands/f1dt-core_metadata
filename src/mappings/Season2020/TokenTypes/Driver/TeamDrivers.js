const Teams = require('../../Attributes/Team/Teams');

const NoDriver = {
    driverId: '0',
    name: 'None',
};
const KimiRaikkonen = {
    driverId: '7',
    name: 'Kimi Räikkönen',
    imageName: 'KimiRaikkonen',
    team: Teams.AlfaRomeoRacingORLEN.team,
    description: 'Kimi Räikkönen, otherwise known as "The Iceman", continues 2020 with Alfa Romeo. He has since become the driver with the most Grand Prix™ starts, surpassing the previous record of 324.'
};
const AntonioGiovinazzi = {
    driverId: '99',
    name: 'Antonio Giovinazzi',
    team: Teams.AlfaRomeoRacingORLEN.team,
    description: "Antonio Giovinazzi had a solid second season with Alfa Romeo in 2020, achieving points at three Grands Prix™, finishing the season 17th in the drivers' championship."
};
const PierreGasly = {
    driverId: '10',
    name: 'Pierre Gasly',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    description: "In 2020 Pierre Gasly became the first Frenchman to win a Grand Prix™ in 24 years and gave his team, Alpha Tauri, their first race victory since 2008."
};
const DaniilKvyat = {
    driverId: '26',
    name: 'Daniil Kvyat',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    description: "Daniil Kvyat grabbed his first points of the 2020 season at Austria, at the Styrian Grand Prix™ and went on to have a strong 4th place finish at Imola."
};
const SebastianVettel = {
    driverId: '5',
    name: 'Sebastian Vettel',
    team: Teams.ScuderiaFerrari.team,
    description: 'A decorated driver with 4 Championships during his career, Sebastian Vettel had a tough 2020 season. But he still managed a podium finish in Turkey, ultimately ending 13th in the driver championship.'
};
const CharlesLeclerc = {
    driverId: '16',
    name: 'Charles Leclerc',
    team: Teams.ScuderiaFerrari.team,
    description: "Charles Leclerc ended the 2020 season with 98 points, securing 8th in the drivers' championship. He managed 2 podium finishes during this challenging season."
};
const RomainGrosjean = {
    driverId: '8',
    name: 'Romain Grosjean',
    team: Teams.HaasF1Team.team,
    description: "Romain Grosjean's best place finish in 2020 was 9th during the German Grand Prix™, with a crash cutting his season short during an incident in Bahrain."
};
const KevinMagnussen = {
    driverId: '20',
    name: 'Kevin Magnussen',
    team: Teams.HaasF1Team.team,
    description: 'Kevin Magnussen had a tough season in the Haas during 2020, with his highest finish of the season being 10th in the Hungarian Grand Prix™.'
};
const CarlosSainz = {
    driverId: '55',
    name: 'Carlos Sainz',
    team: Teams.McLarenF1Team.team,
    description: 'Carlos Sainz had his best season so far in 2020, getting his second podium and a 2nd place finish in Italian Grand Prix™. He also achieved his first fastest lap in Austria, setting a new lap record in the process.'
};
const LandoNorris = {
    driverId: '4',
    name: 'Lando Norris',
    team: Teams.McLarenF1Team.team,
    description: "In 2020, Lando Norris achieved the feat of becoming the third youngest driver to get on a podium at the Austrian Grand Prix™. It was a strong season that saw McLaren reach 3rd in the constructors' championship."
};
const LewisHamilton = {
    driverId: '44',
    name: 'Lewis Hamilton',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    description: 'Lewis Hamilton is one of the most successful drivers ever to race, and in 2020 equalled the record of 7 Drivers Championships, and broke the previous wins record of Grand Prix(tm) wins, achieving 95.'
};
const ValtteriBottas = {
    driverId: '77',
    name: 'Valtteri Bottas',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    description: "Valtteri Bottas achieved 11 podium finishes in 2020, with 2 of those being wins. His performance contributed to Mercedes winning the Constructors' Championship. "
};
const SergioPerez = {
    driverId: '11',
    name: 'Sergio Pérez',
    imageName: 'SergioPerez',
    team: Teams.BWTRacingPointF1Team.team,
    description: 'In a solid season, Sergio Pérez achieved his first race win in Bahrain, at the Sahkir Grand Prix™.'
};
const LanceStroll = {
    driverId: '18',
    name: 'Lance Stroll',
    team: Teams.BWTRacingPointF1Team.team,
    description: 'Lance Stroll achieved a podium finish at Monza, finishing 3rd, and then went on to replicate this at the end of the season in Bahrain with a second 3rd place finish for 2020.'
};
const MaxVerstappen = {
    driverId: '33',
    name: 'Max Verstappen',
    team: Teams.AstonMartinRedBullRacing.team,
    description: "With 11 podiums and 2 wins, Max Verstappen ended the season 3rd in the Drivers' Championship for the second year running."
};
const AlexanderAlbon = {
    driverId: '23',
    name: 'Alexander Albon',
    team: Teams.AstonMartinRedBullRacing.team,
    description: 'The Tuscan Grand Prix™ saw Alexander Albon achieve his first career podium finish, and he went on to achieve a second podium in Bahrain.'
};
const DanielRicciardo = {
    driverId: '3',
    name: 'Daniel Ricciardo',
    team: Teams.RenaultDPWorldF1Team.team,
    description: "Daniel Ricciardo was able to get Renault's first podium finish since 2011, with a 3rd place finish at the Eifel Grand Prix™."
};
const EstebanOcon = {
    driverId: '31',
    name: 'Esteban Ocon',
    team: Teams.RenaultDPWorldF1Team.team,
    description: 'Esteban Ocon returned as a full time Formula 1 driver in 2020, with his best finish of the season coming in Bahrain with a 2nd place finish.'
};
const GeorgeRussell = {
    driverId: '63',
    name: 'George Russell',
    team: Teams.WilliamsRacing.team,
    description: 'George Russell continued with Williams in 2020, and after a one race stint with Mercedes achieved his first points in Formula 1.'
};
const NicholasLatifi = {
    driverId: '6',
    name: 'Nicholas Latifi',
    team: Teams.WilliamsRacing.team,
    description: 'Nicholas Latifi joined the grid in 2020 with Williams, and had a solid debut season with the British team.'
};

module.exports = {
    NoDriver,
    KimiRaikkonen,
    AntonioGiovinazzi,
    PierreGasly,
    DaniilKvyat,
    SebastianVettel,
    CharlesLeclerc,
    RomainGrosjean,
    KevinMagnussen,
    CarlosSainz,
    LandoNorris,
    LewisHamilton,
    ValtteriBottas,
    SergioPerez,
    LanceStroll,
    MaxVerstappen,
    AlexanderAlbon,
    DanielRicciardo,
    EstebanOcon,
    GeorgeRussell,
    NicholasLatifi,
};
