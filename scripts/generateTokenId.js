const { createTokenId } = require('../src/metadata');
const program = require('commander');
program
    .version('0.0.1')
    .option('--season <season>', 'token season')
    .option('--seasonId <seasonId>', 'token seasonId')
    .option('--type <type>', 'token type')
    .option('--typeId <type>', 'token typeId')
    .option('--subType <subType>', 'token subType')
    .option('--subTypeId <Id>', 'token subTypeId')
    .requiredOption('--rarity <rarity>', 'token rarity')
    .option('--model <model>', 'token model')
    .option('--modelId <modelId>', 'token modelId')
    .option('--team <team>', 'token team')
    .option('--teamId <teamId>', 'token teamId')
    .option('--track <track>', 'token track')
    .option('--trackId <trackId>', 'token trackId')
    .option('--label <label>', 'token label')
    .option('--labelId <labelId>', 'token labelId')
    .option('--driver <driver>', 'token driver')
    .option('--driverId <driverId>', 'token driverId')
    .option('--stat1 <stat1>', 'token stat1')
    .option('--stat2 <stat2>', 'token stat2')
    .option('--stat3 <stat3>', 'token stat3')
    .option('--luck <luck>', 'token luck')
    .option('--effect <effect>', 'token effect')
    .option('--special1 <special1>', 'token special1')
    .option('--special2 <special2>', 'token special2')
    .option('--counter <counter>', 'token counter')
    .parse(process.argv);

const coreMetadata = {
    season: program.season,
    seasonId: program.seasonId,
    type: program.type,
    typeId: program.typeId,
    subType: program.subType,
    subTypeId: program.subTypeId,
    rarity: program.rarity,
    model: program.model,
    modelId: program.modelId,
    team: program.team,
    teamId: program.teamId,
    track: program.track,
    trackId: program.trackId,
    label: program.label,
    labelId: program.labelId,
    driver: program.driver,
    driverId: program.driverId,
    stat1: program.stat1,
    stat2: program.stat2,
    stat3: program.stat3,
    luck: program.luck,
    effect: program.effect,
    special1: program.special1,
    special2: program.special2,
    counter: program.counter,
}
const id = createTokenId(coreMetadata);
console.log(id);
