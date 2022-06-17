/* exported defaults */
// Define a function named defaults
// that takes an object named target and an object named source as arguments
// and modifies the target object by assigning properties from the source object
// to the target object that are not already defined in the target object
// use the omit function to assign properties from the source object not defined in the target object to a newObject
// define array named propertyArray and assign the keys of the newObject to it
//     loop through the propertyArray with a for..loop
//       if the target object does not have a property with the same name as the current property at propertyArray[i]
//         then assign the value of the newObject at propertyArray[i] to the target object at propertyArray[i]

function defaults(target, source) {
  var newObject = omit(source, Object.keys(target));
  var propertyArray = Object.keys(newObject);
  for (var i = 0; i < propertyArray.length; i++) {
    if (target[propertyArray[i]] === undefined) {
      target[propertyArray[i]] = newObject[propertyArray[i]];
    }
  }
}

// repeat omit function from omit.js
function omit(source, keys) {
  var newObject = {};
  var newArray = [];
  var propertyArray = Object.keys(source);
  for (var i = 0; i < propertyArray.length; i++) {
    var found = false;
    for (var j = 0; j < keys.length; j++) {
      if (propertyArray[i] === keys[j]) {
        found = true;
      }
    }
    if (!found) {
      newArray.push(propertyArray[i]);
    }
  }
  for (i = 0; i < newArray.length; i++) {
    if (source[newArray[i]] !== undefined) {
      newObject[newArray[i]] = source[newArray[i]];
    }
  }
  return newObject;
}
