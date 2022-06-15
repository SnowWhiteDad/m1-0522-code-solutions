/* exported omit */
// Define a function named omit
// that takes an object named source and an array named keys as arguments
// and returns a new object containing all properties of the source object that are not listed in the keys array
// if a property is listed in keys but not in source, it should be ignored.
//     define a newObject and assign an empty object to it
//     define a newArray and assign an empty array to it
//     define a propertyArray and assign properties of the source object to it as an array
//     loop through the propertyArray with a for..loop
//        initialize a new variable found and set its value to false
//            loop through the keys array with a for..loop
//              check if the current indexed i property in propertyArray is the same as the current indexed j key (or any key in the keys array)
//                 if propertyArray[i] matches any key[j], assign true to found
//        After the keys array loop, check if found is false - implying that the current property at propertyArray[i] is not in the keys array
//             if so, push the current property at propertyArray[i] to the newArray
//     After the propertyArray loop, loop through the newArray with a for..loop
//        check if the value of the current property at newArray[i] is not undefined in the source object
//             if so, assign the value of the property at newArray[i] in source object to the newObject
// return the newObject

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
