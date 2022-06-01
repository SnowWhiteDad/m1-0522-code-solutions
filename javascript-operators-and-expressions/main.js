var width = 7;
var height = 8;
var area = width * height;
var bill = 2500.00;
var payment = 2550.00;
var change = payment - bill;
var quizzes = 4;
var midterm = 5;
var final = 5;
var grade = (quizzes + midterm + final) / 3;
var firstName = 'Ola';
var lastName = 'Sh2';
var fullName = firstName + ' ' + lastName;
var pH = 7.2;
var isAcidic = pH < 7;
var headCount = 276;
var isSparta = headCount === 300;
var motto = fullName;

motto = motto + ' is the GOAT';

console.log('area is ', area);
console.log('area is a ', typeof area, ' variable');

console.log(' ');

console.log('change is ', change);
console.log('change is a ', typeof change, ' variable');

console.log(' ');

console.log('grade is ', grade);
console.log('grade is a ', typeof grade, ' variable');

console.log(' ');

console.log('The Name is ', fullName);
console.log('fullName is a ', typeof fullName, ' variable');

console.log(' ');

console.log('Is it acidic? ', isAcidic);
console.log('isAcidic is a ', typeof isAcidic, ' variable');

console.log(' ');

console.log('Same soldiers as the Thermopylae Sparta? ', isSparta);
console.log('isSparta is a ', typeof isSparta, ' variable');

console.log(' ');

console.log(motto);
console.log('motto is a ', typeof motto, ' variable');
