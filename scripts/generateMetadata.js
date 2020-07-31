const { getCoreMetadata, getFullMetadata } = require('../src/metadata');
const program = require('commander');
program
    .version('0.0.1')
    .requiredOption('-i, --id <id>', 'F1DT Inventory ID')
    .option('--full', 'full metadata')
    .option('-n, --network <network>', 'network (default mainnet)')
    .parse(process.argv);

const id = program.id;
let metadata = program.full ? getFullMetadata(id, program.network) : getCoreMetadata(id);
console.dir(metadata);
