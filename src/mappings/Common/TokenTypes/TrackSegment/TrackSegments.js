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

module.exports = {
    MonacoTrackSegments,
    BelgiumTrackSegments
};
