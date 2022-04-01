// Methods
  // methods are functions that have been defined as a property on an object

  const math = {
    // multiply is a method
    multiply: function(x,y) {
      return x * y;
    }
  }

  // short-hand method for creating methods
  const math = {
    // multiply is a method - leave off function keyword and colon 
    multiply(x,y) {
      return x * y;
    },
    //comma after the codeblock is required
  },
    // add is another method
    add(x,y) {
      return x + y;
    }
    math.add(2,4) // 