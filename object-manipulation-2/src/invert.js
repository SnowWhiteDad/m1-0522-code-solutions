/* exported invert */
// Define a function named invert
// that takes an object named source as argument
// and returns a new object composed or inverted keys and values of the source object
//     define a newObject and assign an empty object to it
//     loop through the source object with a for..in loop
//       assign the value of the current property to the newObject with the key of the current property
//       assign the key of the current property to the newObject with the value of the current property
//     return the newObject

function invert(source) {
  var newObject = {};
  for (var property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}
