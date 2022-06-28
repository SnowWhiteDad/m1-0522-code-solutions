// query the DOM for the contact form
var contactForm = document.getElementById('contact-form');
// add event listener for 'submit' event
contactForm.addEventListener('submit', function (event) {
  // call preventDefault() method
  event.preventDefault();
  // get form values and assign them to formValues object
  var formValues = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  // log the formValues object to console
  console.log(formValues);
}
);
