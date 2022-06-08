var num1 = 1;
var num2 = 3;
var num3 = 6;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue: ', maximumValue);

var heroes = ['Iron Man', 'Superman', 'Captain America', 'Black Panther'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Porter and the Deathly Harlows',
    author: 'JK Rowling'
  },
  {
    title: 'Spiritual Leadership',
    author: 'Oswald J Sanders'
  },
  {
    title: 'Crucial Conversations',
    author: 'Joseph Greeny'
  }
];

var lastBook = library.pop();
console.log('Last book: ', lastBook);

var firstBook = library.shift();
console.log('First book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('remaining books in library: ', library);

var fullName = 'Dingos Oyato';
var firstAndLastName = fullName.split(' ');
console.log('First and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
