const reverseString = function(str) {
    if (str.length === 1) {
      return str.charAt(0);
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}

reverseString('Hello, my name is Jacob');