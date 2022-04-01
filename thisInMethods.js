// This keyword
  //typically used inside of an object's method 

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log('meow meow meow')
  }
}
// in order to have access to the object's properties inside the method, the this keyword refers to the object the method was called on
const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    // reference of this is decided by the invocation context
    console.log(this.name + ' says meow meow meow')
  }
}

// in this case, meow2 has a this which refers to the window object
const meow2 = cat.meow;

// the way the method is invoked determines the reference of this

 



