const Teams = require('../../Attributes/Team/Teams');

const NoDriver = {
    driverId: '0',
    driver: 'None',
};
const KimiRaikkonen = {
    driverId: '7',
    driver: 'Kimi Raikkonen',
    team: Teams.AlfaRomeoRacingORLEN.team,
    extendedMetadata: {
        name: 'Kimi Raikkonen',
        description:
            'Kimi Räikkönen, otherwise known as "The Iceman", continues 2020 with Alfa Romeo. He has since become the driver with the most Grand Prix starts, surpassing the previous record of 324.'
    },
};
const AntonioGiovinazzi = {
    driverId: '99',
    driver: 'Antonio Giovinazzi',
    team: Teams.AlfaRomeoRacingORLEN.team,
    extendedMetadata: {
        name: 'Antonio Giovinazzi',
        description:
            "During the 2019 Formula 1 season, Antonio Giovinazzi became the first Italian driver in nearly 10 years to win points in a Grand Prix."
    },
};
const PierreGasly = {
    driverId: '10',
    driver: 'Pierre Gasly',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    extendedMetadata: {
        name: 'Pierre Gasly',
        description:
            "Pierre Gasly had previously won Toro Rosso their highest ever finish in a Grand Prix with second place in Brazil."
    },
};
const DaniilKvyat = {
    driverId: '26',
    driver: 'Daniil Kvyat',
    team: Teams.ScuderiaAlphaTauriHonda.team,
    extendedMetadata: {
        name: 'Daniil Kvyat',
        description:
            'Damiil Kvyat returned to Toro Rosso in 2019 for the third time, and has been retained for the switch to AlphaTauri.'
    },
};
const SebastianVettel = {
    driverId: '5',
    driver: 'Sebastian Vettel',
    team: Teams.ScuderiaFerrari.team,
    extendedMetadata: {
        name: 'Sebastian Vettel',
        description:
            'Sebastian Vettel has won 4 Championships during his career, amassing 53 wins in the process.'
    },
};
const CharlesLeclerc = {
    driverId: '16',
    driver: 'Charles Leclerc',
    team: Teams.ScuderiaFerrari.team,
    extendedMetadata: {
        name: 'Charles Leclerc',
        description:
            'During a successful 2019 season with Ferrari, Charles Leclerc won the most pole positions of any driver through the season.'
    },
};
const RomainGrosjean = {
    driverId: '8',
    driver: 'Romain Grosjean',
    team: Teams.HaasF1Team.team,
    extendedMetadata: {
        name: 'Romain Grosjean',
        description:
            "Romain Grosjean's best place finish of the 2019 Formula 1 season came in Germany, as he went on to finish 7th."
    },
};
const KevinMagnussen = {
    driverId: '20',
    driver: 'Kevin Magnussen',
    team: Teams.HaasF1Team.team,
    extendedMetadata: {
        name: 'Kevin Magnussen',
        description:
            'In 2019, Kevin Magnussen set the fastest lap in Singapore, which he had also done the year prior.'
    },
};
const CarlosSainz = {
    driverId: '55',
    driver: 'Carlos Sainz',
    team: Teams.McLarenF1Team.team,
    extendedMetadata: {
        name: 'Carlos Sainz',
        description:
            'After joining McLaren at the beginning of the 2019 season, Carlos Sainz went on to get his first podium finish in Formula 1.'
    },
};
const LandoNorris = {
    driverId: '4',
    driver: 'Lando Norris',
    team: Teams.McLarenF1Team.team,
    extendedMetadata: {
        name: 'Lando Norris',
        description:
            'Lando Norris continues with McLaren in 2020, after his impressive debut season in 2019.'
    },
};
const LewisHamilton = {
    driverId: '44',
    driver: 'Lewis Hamilton',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    extendedMetadata: {
        name: 'Lewis Hamilton',
        description:
            'Lewis Hamilton is one of the most successful drivers ever to race, with records in podiums, wins, and pole positions, as well as numerous Championships.'
    },
};
const ValtteriBottas = {
    driverId: '77',
    driver: 'Valtteri Bottas',
    team: Teams.MercedesAMGPetronasFormulaOneTeam.team,
    extendedMetadata: {
        name: 'Valtteri Bottas',
        description:
            'In the first race of the 2019 season, Valtteri Bottas put together the fastest lap, and ended up taking first place in Australia. 2019 was his best season to date.'
    },
};
const SergioPerez = {
    driverId: '11',
    driver: 'Sergio Perez',
    team: Teams.BWTRacingPointF1Team.team,
    extendedMetadata: {
        name: 'Sergio Perez',
        description:
            'Sergio Perez began the 2019 season strongly, ending the season in 10th place overall.'
    },
};
const LanceStroll = {
    driverId: '18',
    driver: 'Lance Stroll',
    team: Teams.BWTRacingPointF1Team.team,
    extendedMetadata: {
        name: 'Lance Stroll',
        description:
            'Lance Stroll joined Racing Point in 2019, with a good maiden season which saw him get 4th place in Germany.'
    },
};
const MaxVerstappen = {
    driverId: '33',
    driver: 'Max Verstappen',
    team: Teams.AstonMartinRedBullRacing.team,
    extendedMetadata: {
        name: 'Max Verstappen',
        description:
            "Max Verstappen's fourth season at Red Bull saw him with his best record to date, finishing the season 3rd overall on points."
    },
};
const AlexanderAlbon = {
    driverId: '23',
    driver: 'Alexander Albon',
    team: Teams.AstonMartinRedBullRacing.team,
    extendedMetadata: {
        name: 'Alexander Albon',
        description:
            'In August 2019, Albon moved from Toro Rosso to Red Bull. He earned his highest finished - 4th - in Japan, and went on to win the Rookie of the Year.'
    },
};
const DanielRicciardo = {
    driverId: '3',
    driver: 'Daniel Ricciardo',
    team: Teams.RenaultDPWorldF1Team.team,
    extendedMetadata: {
        name: 'Daniel Ricciardo',
        description:
            'Daniel Ricciardo moved to Renault in 2019. His best finish of the year was in Italy when he finished 4th.'
    },
};
const EstebanOcon = {
    driverId: '31',
    driver: 'Esteban Ocon',
    team: Teams.RenaultDPWorldF1Team.team,
    extendedMetadata: {
        name: 'Esteban Ocon',
        description:
            'Esteban Ocon returns as a full time Formula 1 driver this season, joining Renault.'
    },
};
const GeorgeRussell = {
    driverId: '63',
    driver: 'George Russell',
    team: Teams.WilliamsRacing.team,
    extendedMetadata: {
        name: 'George Russell',
        description:
            'George Russell made his Formula 1 debut last season with Williams, and continues with Williams in 2020.'
    },
};
const NicholasLatifi = {
    driverId: '6',
    driver: 'Nicholas Latifi',
    team: Teams.WilliamsRacing.team,
    extendedMetadata: {
        name: 'Nicholas Latifi',
        description:
            'Nicholas Latifi joins the grid in 2020, racing with Williams.'
    },
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
