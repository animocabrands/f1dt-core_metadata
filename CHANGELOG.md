# Changelog

## 2.1.2
* Updated descriptions for Silverstone, Monza and Shanghai tracks

## 2.1.1
* Updated image name for all existing tracks

## 2.1.0
* Updated Track name for Silverstone
* Added Shanghai track
* Added/Updated track segment name for Silverstone, Monza and Shanghai

## 2.0.9
* Minor fix on Track.js countryId should use the countryId in Countries.js instead of an object

## 2.0.8
* Fixed China Azure Dragon edition youtube url is using a shortern youtube url

## 2.0.7
* Fixed FirstEdition car images should be align with the team car image

## 2.0.6
* Fixed First edition Cars are missing youtube_url attribute

## 2.0.5
* Revert tokenId: 57899578366707547814966713827535462487986658084231150927309255110625459205623 from team Aston Martin back to Toro Rosso

## 2.0.4
* Fixed Lewis Hamilton description

## 2.0.3
* Updated 2020 Team Drivers description

## 2.0.2
* Added Belgium Track Segment

## 2.0.1
* Updated generic driver description
* Fixed image override settings is not working
* Fixed Kimi Räikkönen and Sergio Pérez image url is not correct

## 2.0.0
* Added 2020 NFTs
* Code cleanup (removing extendedMeta in TokenTypes)

## 1.2.1
* Migrate image url to another CDN
* Forced Apex car to generate image url using getImageUrl

## 1.1.8
* Updated youtube url for Australia Edition 2020
* Added 70th Anniversary Edition Apex car

## 1.1.7
* Updated Track segment name and description

## 1.1.6
### Improvements
* Removed opensea attributes `earning_share` for Tracks 

## 1.1.5

### Bugfix
* Fix the ES6 runtime issue in TrackSegment.js

## 1.1.0

### New Features
* Add Track Segment layout for track NFTs
* Add Bahrain Edition Apex Car NFT
* Add Monaco Track Segments NFT

### Bugfix
* Fix a crash during validation of the Core Metadata
* Fix the original trackId using is actually countryId
* Should skip validating season metadata when `season` field is 0

### Improvements
* House keeping on the folder structure and some code cleanup

## 1.0.4

### Bugfix
* Fixed a bug showing a wrong rarity for pre-crates tokens.
* Swap two driver's team and add new entries in the repair list.

### Improvements
 * Add `collection` field in full metadata.

## 1.0.3

### Bugfix
 * Fix the collections flattening.

## 1.0.2

### New features
 * Optional validation step for token id creation.

## 1.0.1

### Breaking changes
 * Major code refactor.

### New features
 * Token id creation from metadata.
 * Metadata validation.

### Improvements
 * Improved documentation.
 * Integrated `prettier`.

### Bugfixes
* Several bugfixes.

## 0.1.2

### Bugfixes
* Fixed image url generation for tyres

### Chores
* Removed `console.log` from `metadata/image.js`

## 0.1.1

### Bugfixes
* Fix require paths for seasons.

## 0.1.0

### New Features
* Added `collections` with support for inventory metadata layouts.
* Added season 2020 mappings (WIP).

### Chores
 * Moved `metadataFromId.js` to `scripts` folder.

## 0.0.2

### Bugfixes
* Fixed wrong require path.

## 0.0.1
* Initial commit.
