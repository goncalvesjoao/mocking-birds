var prepareTheNest = require('../../src/prepareTheNest');
var mockDir = 'test/support/mockServers/';
var appMock = { use: function() {} };

describe('prepareTheNest', function() {
  context('when mocksDirectory is none existent', function() {
    it('should return false', function() {
      expect(prepareTheNest(appMock, 'none')).to.be.false;
    });
  });

  context('when mocksDirectory exists', function() {
    it('should return true', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good', 1, [])).to.be.true;
    });
  });

  context('when mocksDirectory is a file', function() {
    it('should return false', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good/med-locker.js', 1, [])).to.be.false;
    });
  });

  context('when serverPort is undefined', function() {
    it('should return false', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good', undefined, [])).to.be.false;
    });
  });

  context('when serverPort is a string', function() {
    it('should return false', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good', 'a1', [])).to.be.false;
    });
  });

  context('when whitelist is undefined', function() {
    it('should return true', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good', 1, undefined)).to.be.false;
    });
  });

  context('when whitelist is a string', function() {
    it('should return true', function() {
      expect(prepareTheNest(appMock, 'test/support/mockServers/2good', 1, 'a')).to.be.false;
    });
  });
});
