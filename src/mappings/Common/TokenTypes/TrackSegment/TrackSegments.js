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
const silverstoneTrackDesc = 'Set in 2.71 acres of forest in the mountains of Silverstone(this is temp text), Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
const SilverstoneTrackSegments = (rarity) => {
    switch(rarity) {
        default:
            return { 
                name: silverstoneTrackName,
                description: silverstoneTrackDesc
            };
    }
}

const monzaTrackName = 'FORMULA 1 GRAN PREMIO HEINEKEN D’ITALIA 2020 - Monza';
const monzaTrackDesc = 'Set in 3.14 acres of forest in the mountains of Monza(this is temp text), Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
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
const shanghaiTrackDesc = 'Set in 3.14 acres of forest in the mountains of Shanghai(this is temp text), Circuit de Spa-Francorchamps is one of Formula 1’s most challenging and historic race tracks. The legendary circuit has been hosting the FORMULA 1 BELGIAN GRAND PRIX since 1925.';
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
