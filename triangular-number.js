const triNumber = function(n) {
    if (n < 1) {
      return 'error: must have an input of at least 1 to follow the trangular number sequence';
    }
    else if (n === 1) {
      return n;
    }
    return n + triNumber(n - 1);
}
  
triNumber(5);