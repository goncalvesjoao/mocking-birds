var fs = require('fs-extra');
var control = require('./control');

function gatherSingleBird(directory, mockingBirds, fileName) {
  var mockPath = directory + fileName;
  var file = fs.lstatSync(mockPath);

  if (file.isDirectory()) {
    return Array.prototype.push.apply(mockingBirds, gatherTheFlock(mockPath));
  }

  try {
    mockingBirds.push({
      mockPath: mockPath,
      mockModule: require(process.cwd() + '/' + mockPath)
    });
  } catch(error) {
    control.error('Failed to require "' + mockPath + '":');
    control.error(error.message);
    control.error('');
  }
}

function gatherTheFlock(directory) {
  var mockingBirds = [];

  if (directory[directory.length - 1] !== '/') {
    directory += '/';
  }

  fs.readdirSync(directory)
    .forEach(gatherSingleBird.bind(null, directory, mockingBirds));

  return mockingBirds;
}

module.exports = gatherTheFlock;
