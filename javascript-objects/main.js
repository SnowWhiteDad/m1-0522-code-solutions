var student = {
  firstName: 'Ola',
  lastName: 'Sh2',
  age: 42
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Name is: ', fullName);

console.log(' ');
student.livesInIrvine = false;
student.previousOccupation = 'Teaching';

console.log('Lives in Irvine? ', student.livesInIrvine);

console.log(' ');

console.log('Previous Occcupation: ', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model X',
  year: 2017
};

vehicle['color'] = 'Midnight Silver';
vehicle['isConvertible'] = false;

console.log(' ');

console.log('The color of ', vehicle.make, ' is', vehicle['color']);
console.log('Is the ', vehicle.make, ' a convertible?', vehicle['isConvertible']);
console.log(' ');

console.log('The vehicle details are: ', vehicle);

var pet = {
  name: 'Hercules',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log(' ');
console.log('The value of pet: ', pet);
