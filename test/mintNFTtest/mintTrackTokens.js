const fse = require('fs-extra');
const path = require('path');
const {getCoreMetadata, getFullMetadata} = require('../../src/utils/metadata');
const {ById: TrackById} = require('../../src/mappings/Common/Attributes/Track');
const {ById: CountryById} = require('../../src/mappings/Common/Attributes/Country');
const {createTokenId} = require('../../src/utils/ids');
const BigInteger = require('big-integer');

try {
  //Monaco Track 1A
  // const tokenId = '57906645701046769624701038793205201920385629599121490370346791920872332460032';

  //Belgium Track 1A
  const tokenId = createTokenId({
    // using mapped values
    type: 'Track',
    subType: 'None',
    season: '0',
    rarity: '0', // Apex
    country: 'Belgium',
    trackId: '2',
    trackSegment: {
      segmentId: '' + 'A'.charCodeAt(0),
      zoneId: '1',
      earnings: '' + BigInteger(5 * 10 ** 7),
    },
  });
  console.log(tokenId);
  console.log(JSON.stringify(getFullMetadata(tokenId)));
} catch (e) {
  console.error(e);
}

const segmentIdRangeMap = {
  '1': {
    // Monaco
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '2': {
    // Spa
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '3': {
    // Silverstone
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '4': {
    // Monza
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '5': {
    // Shanghai
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '6': {
    // Bahrain
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
  '7': {
    // Shanghai
    '1': {
      // Legendary
      min: 'B'.charCodeAt(0),
      max: 'C'.charCodeAt(0),
    },
    '2': {
      // Epic
      min: 'D'.charCodeAt(0),
      max: 'H'.charCodeAt(0),
    },
    '4': {
      // Rare
      min: 'I'.charCodeAt(0),
      max: 'P'.charCodeAt(0),
    },
  },
};

const trackCountMap = {
  '1': {
    // Monaco
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '2': {
    // Spa
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '3': {
    // Silverstone
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '4': {
    // Monza
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '5': {
    // Shanghai
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '6': {
    // Bahrain
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
  '7': {
    // Australia
    '1': 12, // Legendary
    '2': 20, // Epic
    '4': 25, // Rare
  },
};

const rarityToEarningsMap = {
  '1': '' + BigInteger(1 * 10 ** 7),
  '2': '' + BigInteger(0.25 * 10 ** 7),
  '4': '' + BigInteger(0.125 * 10 ** 7),
};

const createTrackTokenId = (rarityId, country, trackId, segmentId, zoneId, earnings) => {
  const tokenId = createTokenId({
    type: 'Track',
    subType: 'None',
    season: '0',
    rarity: rarityId,
    country: country,
    trackId: trackId,
    trackSegment: {
      segmentId: segmentId,
      zoneId: zoneId,
      earnings: earnings,
    },
  });

  return tokenId;
};

describe('Tracks', function () {
  describe('Generate token IDs', function () {
    it('Build tokens', function () {
      fse.mkdirpSync(path.join('test', 'mintNFTtest', 'generatedIds'));
      const trackIds = Object.keys(TrackById).filter((key) => key !== '0');
      trackIds.forEach((trackId) => {
        console.log('Building for ' + TrackById[trackId].track);
        let tokenIds = '';
        const rangeMap = new Map(Object.entries(segmentIdRangeMap[trackId]));
        rangeMap.forEach((range, rarity) => {
          if (rarity != '4') {
            return;
          }

          const earnings = rarityToEarningsMap[rarity];
          for (let i = range.min; i <= range.max; i++) {
            const segmentId = '' + i;
            for (let j = 1; j <= trackCountMap[trackId][rarity]; j++) {
              const zoneId = '' + j;
              const country = CountryById[TrackById[trackId].countryId].country;
              const tokenId = createTrackTokenId(rarity, country, trackId, segmentId, zoneId, earnings);
              tokenIds += tokenId + '\n';
              getFullMetadata(tokenId);
            }
          }
        });

        const fileName = TrackById[trackId].track.replace(/\s/g, '');
        const exportFilePath = path.join('test', 'mintNFTtest', 'generatedIds', fileName + '.txt');
        fse.writeFileSync(exportFilePath, tokenIds);
      });
    });
  });
});
