const powerCalculator = function(base, power) {
    if (power < 0) {
      return 'exponent should be >= 0';
    }
    if (power === 0) {
      return 1;
    }
    return base * powerCalculator(base, power - 1)
  }
  
  powerCalculator(10, 5);