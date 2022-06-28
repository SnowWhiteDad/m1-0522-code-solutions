// defime a function named handleFocus(event)
function handleFocus(event) {
  // logs a message that the 'focus' event was fired
  console.log('focus' + ' event fired');
  // logs the event.target.name property
  console.log('event.target.name ', event.target.name);
}

// define a function named handleBlur(event)
function handleBlur(event) {
  // logs a message that the 'blur' event was fired
  console.log('blur' + ' event fired');
  // logs the event.target.name property
  console.log('event.target.name ', event.target.name);
}

// define a function named handleInput(event)
function handleInput(event) {
  // logs the value of event.target.name property as event.target.value
  console.log(' value of', event.target.name, ': ', event.target.value);
}

// query the form element for input elements
var inputs = document.querySelectorAll('input');
// iterate through the input elements and add event listeners, one for each event handler: focus, blur, and input
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', handleFocus);
  inputs[i].addEventListener('blur', handleBlur);
  inputs[i].addEventListener('input', handleInput);
}

// query the form element for textarea elements
var textareas = document.querySelectorAll('textarea');
// iterate through the textarea elements and add event listeners, one for each event handler: focus, blur, and input
for (i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener('focus', handleFocus);
  textareas[i].addEventListener('blur', handleBlur);
  textareas[i].addEventListener('input', handleInput);
}
