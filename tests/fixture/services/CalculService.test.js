const assert = require('assert');

describe('CalculService', function () {
  describe('#addition', function () {
    it('should add values', function () {
      let result = CalculService.addition(2, 2);
      assert.equal(result, 4);
    });
  });

  describe('#soustraction', function () {
    it('should sub values', function () {
      let result = CalculService.soustraction(4, 2);
      assert.equal(result, 2);
    });
  });

  describe('#multiplication', function () {
    it('should multiplie values', function () {
      let result = CalculService.multiplication(3, 3);
      assert.equal(result, 9);
    });
  });

  describe('#division', function () {
    it('should div values', function () {
      let result = CalculService.division(10, 0);
      assert.equal(result, 5);
    });
  });
});
