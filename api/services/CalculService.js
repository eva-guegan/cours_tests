const {throws} = require('assert');
//
module.exports = {
  addition : (a, b) => {
    return a+b;
  },
  //
  soustraction : (a, b) => {
    return a-b;
  },
  //
  multiplication : (a, b) => {
    return a*b;
  },
  //
  division : (a, b) => {
    if (b === 0) {
      throw new Error('division par 0 impossible');
    }
    return a/b;
  },
  //
  pourcentage : (a, pourct) => {
    // avec a = valeur partielle et b = valeur totale
    let result = CalculService.multiplication(a, pourct);
    result = CalculService.division(result, 100);
    return result+1;
  },
  //
  square : (a) => {
    return CalculService.multiplication(a, a);
  },
};
