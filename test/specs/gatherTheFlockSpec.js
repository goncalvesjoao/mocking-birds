var gatherTheFlock = require('../../src/gatherTheFlock');
var mockDir = 'test/support/mockServers/';

describe('gatherTheFlock', function() {
  context('when all the mocks are functional', function() {
    it('number of mocks should be 2', function() {
      expect(gatherTheFlock(mockDir + '2good').length).to.be.equal(2);
    });
  });

  context('when one of the mocks contains errors during loading time', function() {
    it('number of mocks should be 1', function() {
      expect(gatherTheFlock(mockDir + '1bad1good').length).to.be.equal(1);
    });
  });

  context('when one of the mocks contains errors during loading time and the other during runtime', function() {
    it('number of mocks should be 1', function() {
      expect(gatherTheFlock(mockDir + '2bad').length).to.be.equal(1);
    });
  });
});
