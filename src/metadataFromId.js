const { coreMetadataFromId, fullMetadataFromId } = require('./metadata');
const program = require('commander');
program.version('0.0.1')
    .option('-i, --id <id>', 'F1DT Inventory ID')
    .option('--full', 'full metadata')
    .option('-n, --network <network>', 'network (default mainnet)')
    .parse(process.argv)

const id = program.id;
if (id) {
    let metadata;
    if (program.full) {
        metadata = fullMetadataFromId(id, program.network);
    } else {
        metadata = coreMetadataFromId(id);
    }
    console.dir(metadata);
} else {
    console.error('Please provide an ID')
}
