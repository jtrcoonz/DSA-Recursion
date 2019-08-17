const fibonacci = function(n) {
  if (n < 0) {
    return 'error: fibonacci sequence only works with positive integers';
  }
  if (n < 2) {
    return n;
  }
  return (fibonacci(n - 1) + fibonacci(n - 2));
}

fibonacci(10);
