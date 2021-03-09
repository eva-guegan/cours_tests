const assert = require('assert');
var sinon = require('sinon');

describe('CalculService', function () {
  //
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
      let result = CalculService.division(10, 2);
      assert.equal(result, 5);
    });
    //
    it('shouldn\'t div by 0', function () {
      try {
        CalculService.division(10, 0);
      } catch (e) {
        assert.equal(e.message, 'division par 0 impossible');
        return;
      }
      // si ne passe pas dans l'exception alors le test échoue
      assert(false);
    });
  });
  //
  describe('#pourcentage', function () {
    it('should calcul % of a value', function () {
      let stub = sinon.stub(CalculService, 'multiplication').callsFake(function () {return 2500;});
      let stub2 = sinon.stub(CalculService, 'division').callsFake(function () {return 25;});
      //
      let result = CalculService.pourcentage(50, 100);
      //
      CalculService.multiplication.restore();
      CalculService.division.restore();
      //
      assert.equal(result, 26);
    });
    it('should call once each method', function () {
      // créer un stub tout seul
      const spy1 = sinon.spy(CalculService, "multiplication");
      const spy2 = sinon.spy(CalculService, "division");
      //
      CalculService.pourcentage(50, 100);
      //
      assert(spy1.calledOnce);
      assert(spy2.calledOnce);
      //
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
  });
  //
  describe('#square', function () {
    it('should calcul the square', function () {
      // créer un stub tout seul
      const spy1 = sinon.spy(CalculService, "multiplication");
      const spy2 = sinon.spy(CalculService, "division");
      //
      CalculService.square(3);
      //
      assert(spy1.calledOnce);
      assert.equal(spy2.callCount, 0);
      //
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
  });
  //
});
