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
    description: "Romain Grosjean's best place finish in 2020 was 9th during the German Grand Prix™, with a crash cutting his season short during an incident in Bahrain."
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
    description: 'Lewis Hamilton is one of the most successful drivers ever to race, and in 2020 equalled the record of 7 Drivers Championships, and broke the previous wins record of Grand Prix(tm) wins, achieving 95.'
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
