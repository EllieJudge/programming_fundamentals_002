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

  - I could also test for the opposite of a matcher, so I expect there not to be zero books in my 'library', using 'not.toBe' like so.. this should pass the tests:

  test("returns the number of books in the list", () => {
  expect(catalogueService.countBooks()).not.toBe(0);
});

  - I would also want to check all functions returned a value. So '0' if there are no books in the library by a said author, or to return all books by an author etc. If the code is bringing back undefined or a null value this would imply something in the program is working unexpectedly.

  For example, if I wanted to check if a book existed in the catalogue, I would expect either true - yes it does exist, or false, it doesn't. I would always expect one of these two answers back. To check this I could use 'not.toBeNull()' (test should pass), 'not.toBeUndefined()' (test should pass). I always want a defined value of true or false.
  To be even more specific, if I knew a book existed, for example 'Dracula by Bram Stoker' I could check the function returned truthy - 'toBeTruthy()' or 'not.toBeFalsy()'.

  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeNull();
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeUndefined();
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBeDefined();
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBeTruthy();
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeFalsy();
  });

  When counting books by their first letter I would expect there would be atleast one in the library beginning with 'D'. Using the 'toBeGreaterThan' matcher could test for this:

  expect(catalogueService.countBooksByFirstLetter('D')).toBeGreaterThan(0);

  You would expect that any decent library would contain one of Dickens classics 'A Tale of Two Cities'. To check this we could use the 'contains' matcher. If it doesn't contain this book, it's not a good library!

  test('the book list authored by Dickens contains A Tale of Two Cities', () => {
  expect(catalogueService.getBooksByAuthor("Charles Dickens")).toContain("A Tale of Two Cities by Charles Dickens");
});

4. What data types are considered "complex" data types?
- functions, objects and arrays which are all mutable/can be changed

5. What data types are considered "primitive" data types?
- Data types that don't have methods and are not mutable (number, string, null, undefined, boolean, symbol)

6. In JavaScript it is possible to use `==` ("double equals") or `===` ("triple equals") to compare two values. What is the difference and why do we prefer triple equals?

  - triple equals tests for strict equality. This means that not only do the two values have to be the same but the data type of each value has to be the same as well. Double equals, however does not check the data types of the values being compared.

For example:

2 == "2" //true

2 === "2" //false





