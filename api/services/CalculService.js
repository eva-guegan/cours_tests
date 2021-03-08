module.exports = {
  addition : (a, b) => {
    return a+b;
  },
  soustraction : (a, b) => {
    return a-b;
  },
  multiplication : (a, b) => {
    return a*b;
  },
  division : (a, b) => {
    if (b === 0) {
      return false;
    }
    return a/b;
  },
};
