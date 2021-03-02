const Rarities = require('../../Attributes/Rarity/Rarities');

//The key is based on rarity
const monacaTrackName = "Formula 1 Grand Prix de Monaco 2020";
const monacaTrackDesc = "The illustrious FORMULA 1 GRAND PRIX DE MONACO is laid out on the city streets of Monte Carlo and La Condamine in the principality of Monaco. The FORMULA 1 GRAND PRIX DE MONACO has been on the Formula 1 calendar since its inception in 1950 and is considered one of the most glamorous and prestigious events in the sport.";
const MonacoTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: monacaTrackName,
                description: monacaTrackDesc
            };
    }    
}

const belgiumTrackName = 'Formula 1 Rolex Grand Prix de Spa-Francorchamps 2020';
const belgiumTrackDesc = 'Set in 300 acres of forest in the mountains of Belgium, Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
const BelgiumTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: belgiumTrackName,
                description: belgiumTrackDesc
            };
    }
}

const silverstoneTrackName = 'Formula 1 Pirelli British Grand Prix 2020';
const silverstoneTrackDesc = 'Silverstone is a circuit that has gone through several layout changes in its time. The current iteration features 4 straight sections and the fastest combination of turns across any Formula 1® circuits. The iconic section of Copse, Maggots and Becketts will push your car to its limits. The chicane at Vale will test you if you’ve got enough power to slingshot onto the start-finish straight ahead of your opponents.';
const SilverstoneTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: silverstoneTrackName,
                description: silverstoneTrackDesc
            };
    }
}

const monzaTrackName = "Formula 1 Gran Premio Heineken d'Italia 2020";
const monzaTrackDesc = 'A little trip north of Milan will bring you to a rather iconic F1® circuit, otherwise known as the “Temple of Speed”. Having hosted the Italian Grand Prix™ from as early as 1922, the Autodromo Nazionale di Monza, will not only be a proving ground for your car’s sheer pace, but will undoubtedly test your accuracy when it comes to braking.';
const MonzaTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: monzaTrackName,
                description: monzaTrackDesc
            };
    }
}

const shanghaiTrackName = 'Formula 1 Chinese Grand Prix 2020';
const shanghaiTrackDesc = 'Inspired by the Chinese character “上”, the Shanghai International Circuit is a state-of-the-art facility, designed by Herman Tilke in 2003. It has hosted the Chinese Grand Prix 16 times, located just on the outskirts of the global financial hub. Like the bustling city of Shanghai itself, the circuit has everything, from the ever tightening corners of Turn 1 and 2, the high-speed sweepers of Turns 7 and 8, to the 1.2km back straight.';
const ShanghaiTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: shanghaiTrackName,
                description: shanghaiTrackDesc
            };
    }
}

module.exports = {
    MonacoTrackSegments,
    BelgiumTrackSegments,
    SilverstoneTrackSegments,
    MonzaTrackSegments,
    ShanghaiTrackSegments,
};
