var makeThemFly = require('../../src/makeThemFly');

describe('makeThemFly', function() {
  context('when all the mocks are functional', function() {
    it('number of mocks should be 2', function() {
      var mockingBirds = [
        { mockModule: function() {} },
        { mockModule: function() {} },
      ];

      expect(makeThemFly({}, mockingBirds)).to.be.equal(2);
    });
  });

  context('when one of the mocks contains errors', function() {
    it('number of mocks should be 1', function() {
      var mockingBirds = [
        { mockModule: function() { throw Exception; } },
        { mockModule: function() {} },
      ];

      expect(makeThemFly({}, mockingBirds)).to.be.equal(1);
    });
  });

  context('when both of the mocks contains errors', function() {
    it('number of mocks should be 1', function() {
      var mockingBirds = [
        { mockModule: function() { throw Exception; } },
        { mockModule: function() { throw Exception; } },
      ];

      expect(makeThemFly({}, mockingBirds)).to.be.equal(0);
    });
  });
});
