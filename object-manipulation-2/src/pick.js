/* exported pick */
// Define a function named pick
// that takes an object named source and an array named keys as arguments
// and returns a new object containing all properties of the source object listed in the keys array
// if a property is listed in keys but not in source, it should be ignored.
//   define a newObject and assign an empty object to it
//   loop through the keys array use for ..in to loop through the keys
//     if the source object has a property with the same name as the current key and that value is not undefined
//       assign the value of the property to the newObject
//     otherwise
//       ignore the current key
//   return the newObject

function pick(source, keys) {
  var newObject = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i] && source[property] !== undefined) {
        newObject[property] = source[property];
      }
    }
  }
  return newObject;
}
