/* eslint-disable quote-props */
/* eslint-disable quotes */
var booksArray = [
  {
    title: 'The Hobbit',
    isbn: '0395485799',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Lord of the Rings',
    isbn: '043935806X',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Catcher in the Rye',
    isbn: '0312364563',
    author: 'J.D. Salinger'
  }
];

console.log('booksArray: ', booksArray, '\n', 'typeof booksArray: ', typeof booksArray);

var booksString = JSON.stringify(booksArray);
console.log('booksString: ', booksString, '\n', 'typeof booksString: ', typeof booksString);

var studentsString = "{\"Number id\":\"123456789\",\"name\":\"Jeff McLean\"}";

console.log('studentsString: ', studentsString, '\n', 'typeof studentsString: ', typeof studentsString);

var studentsObject = JSON.parse(studentsString);

console.log('studentsObject: ', studentsObject, '\n', 'typeof studentsObject: ', typeof studentsObject);
