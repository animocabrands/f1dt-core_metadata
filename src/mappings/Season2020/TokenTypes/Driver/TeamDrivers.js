const Teams = require('../../Attributes/Team/Teams');

const NoDriver = {
    driverId: '0',
    name: 'None',
};
const KimiRaikkonen = {
    driverId: '7',
    name: 'Kimi Räikkönen',
    team: Teams.AlfaRomeoRacingORLEN.team,
    description: 'Kimi Räikkönen, otherwise known as "The Iceman", continues 2020 with Alfa Romeo. He has since become the driver with the most Grand Prix starts, surpassing the previous record of 324.'
};
const AntonioGiovinazzi = {
    driverId: '99',
    name: 'Antonio Giovinazzi',
    team: Teams.AlfaRomeoRacingORLEN.team,
    description: "During the 2019 Formula 1 season, Antonio Giovinazzi became the first Italian driver in nearly 10 years to win points in a Grand Prix."
};
const PierreGasly = {
    driverId: '10',
    name: 'Pierre Gasly',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    description: "Pierre Gasly had previously won Toro Rosso their highest ever finish in a Grand Prix with second place in Brazil."
};
const DaniilKvyat = {
    driverId: '26',
    name: 'Daniil Kvyat',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    description: 'Damiil Kvyat returned to Toro Rosso in 2019 for the third time, and has been retained for the switch to AlphaTauri.'
};
const SebastianVettel = {
    driverId: '5',
    name: 'Sebastian Vettel',
    team: Teams.ScuderiaFerrari.team,
    description: 'Sebastian Vettel has won 4 Championships during his career, amassing 53 wins in the process.'
};
const CharlesLeclerc = {
    driverId: '16',
    name: 'Charles Leclerc',
    team: Teams.ScuderiaFerrari.team,
    description: 'During a successful 2019 season with Ferrari, Charles Leclerc won the most pole positions of any driver through the season.'
};
const RomainGrosjean = {
    driverId: '8',
    name: 'Romain Grosjean',
    team: Teams.HaasF1Team.team,
    description: "Romain Grosjean's best place finish of the 2019 Formula 1 season came in Germany, as he went on to finish 7th."
};
const KevinMagnussen = {
    driverId: '20',
    name: 'Kevin Magnussen',
    team: Teams.HaasF1Team.team,
    description: 'In 2019, Kevin Magnussen set the fastest lap in Singapore, which he had also done the year prior.'
};
const CarlosSainz = {
    driverId: '55',
    name: 'Carlos Sainz',
    team: Teams.McLarenF1Team.team,
    description: 'After joining McLaren at the beginning of the 2019 season, Carlos Sainz went on to get his first podium finish in Formula 1.'
};
const LandoNorris = {
    driverId: '4',
    name: 'Lando Norris',
    team: Teams.McLarenF1Team.team,
    description: 'Lando Norris continues with McLaren in 2020, after his impressive debut season in 2019.'
};
const LewisHamilton = {
    driverId: '44',
    name: 'Lewis Hamilton',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    description: 'Lewis Hamilton is one of the most successful drivers ever to race, with records in podiums, wins, and pole positions, as well as numerous Championships.'
};
const ValtteriBottas = {
    driverId: '77',
    name: 'Valtteri Bottas',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    description: 'In the first race of the 2019 season, Valtteri Bottas put together the fastest lap, and ended up taking first place in Australia. 2019 was his best season to date.'
};
const SergioPerez = {
    driverId: '11',
    name: 'Sergio Pérez',
    team: Teams.BWTRacingPointF1Team.team,
    description: 'Sergio Perez began the 2019 season strongly, ending the season in 10th place overall.'
};
const LanceStroll = {
    driverId: '18',
    name: 'Lance Stroll',
    team: Teams.BWTRacingPointF1Team.team,
    description: 'Lance Stroll joined Racing Point in 2019, with a good maiden season which saw him get 4th place in Germany.'
};
const MaxVerstappen = {
    driverId: '33',
    name: 'Max Verstappen',
    team: Teams.AstonMartinRedBullRacing.team,
    description: "Max Verstappen's fourth season at Red Bull saw him with his best record to date, finishing the season 3rd overall on points."
};
const AlexanderAlbon = {
    driverId: '23',
    name: 'Alexander Albon',
    team: Teams.AstonMartinRedBullRacing.team,
    description: 'In August 2019, Albon moved from Toro Rosso to Red Bull. He earned his highest finished - 4th - in Japan, and went on to win the Rookie of the Year.'
};
const DanielRicciardo = {
    driverId: '3',
    name: 'Daniel Ricciardo',
    team: Teams.RenaultDPWorldF1Team.team,
    description: 'Daniel Ricciardo moved to Renault in 2019. His best finish of the year was in Italy when he finished 4th.'
};
const EstebanOcon = {
    driverId: '31',
    name: 'Esteban Ocon',
    team: Teams.RenaultDPWorldF1Team.team,
    description: 'Esteban Ocon returns as a full time Formula 1 driver this season, joining Renault.'
};
const GeorgeRussell = {
    driverId: '63',
    name: 'George Russell',
    team: Teams.WilliamsRacing.team,
    description: 'George Russell made his Formula 1 debut last season with Williams, and continues with Williams in 2020.'
};
const NicholasLatifi = {
    driverId: '6',
    name: 'Nicholas Latifi',
    team: Teams.WilliamsRacing.team,
    description: 'Nicholas Latifi joins the grid in 2020, racing with Williams.'
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
