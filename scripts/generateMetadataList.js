const fse = require('fs-extra');
const {getCoreMetadata, getFullMetadata} = require('../src/utils/metadata');
const program = require('commander');
program
  .version('0.0.1')
  .requiredOption('-l, --list <list.json>', 'filepath for a JSON list of token ids')
  .option('--full', 'full metadata')
  .option('-n, --network <network>', 'network (default mainnet)')
  .option('-o, --output <network>', 'output filepath (default disabled, output to console)')
  .parse(process.argv);

const list = JSON.parse(fse.readFileSync(program.list));

const metadatas = [];
for (const id of list) {
  metadatas.push(program.full ? getFullMetadata(id, program.network) : getCoreMetadata(id));
}

if (program.output) {
  fse.writeFileSync(program.output, JSON.stringify(metadatas, null, 2));
} else {
  console.dir(metadatas);
}
