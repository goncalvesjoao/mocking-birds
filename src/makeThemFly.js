var control = require('./control');

function addMockModuleToServer(app, mockingBird) {
  try {
    mockingBird.mockModule(app);

    return true;
  } catch(error) {
    control.error('Failed to run "' + mockingBird.mockPath + '":')
    control.error(error.message);
    control.error('');
  }

  return false;
}

function makeThemFly(app, mockingBirds) {
  var successfulFlights = 0;

  mockingBirds.forEach(function(mockingBird) {
    if (addMockModuleToServer(app, mockingBird)) {
      successfulFlights++;
    }
  });

  return successfulFlights;
}

module.exports = makeThemFly;
