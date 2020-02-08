# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. In what data type have we chosen to represent a book?
  - array

2. Is this the best data type, do you think? Could we have chosen a more appropriate data type? Why?
  - A more appropriate data type to represent a book could have been an object. This is because objects store data in a more structured way and can hold different data types inside of them i.e.

  const book = {
    "title": "The Origin of the Species",
    "author": "Charles Darwin",
    "pages": 502,
    "hardBack": true,
    "contents": ["Index", "Chapter 1", "Chapter 2", "Chapter 3"]
  }

 - Adding to, and editing objects is also straightforward:

 book.inStock = false; // adds "inStock": false to book

3. Take a read of the Jest Documentation about [Matchers](https://jestjs.io/docs/en/using-matchers) such as `toBe` and `toEqual`. What other matchers might come in useful? Check the tests you have written and make a list of alternative matchers which you might have been able to use.

4. What data types are considered "complex" data types?
- functions, objects and arrays which are all mutable/can be changed

5. What data types are considered "primitive" data types?
- Data types that don't have methods and are not mutable (number, string, null, undefined, boolean, symbol)

6. In JavaScript it is possible to use `==` ("double equals") or `===` ("triple equals") to compare two values. What is the difference and why do we prefer triple equals?
  
  - triple equals tests for strict equality. This means that not only do the two values have to be the same but the data type of each value has to be the same as well. Double equals, however does not check the data types of the values being compared.

For example:

2 == "2" //true

2 === "2" //false





