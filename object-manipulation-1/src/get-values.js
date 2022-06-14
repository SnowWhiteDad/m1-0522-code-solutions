/* exported getValues */
// Define a function named getValues
// that takes an object as an argument
// and returns an array of all object's property values
//    assign an empty array to a variable named values
//    loop over the object's properties using for ... in loop
//      push the property's value to the values array
//    return the values array
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
