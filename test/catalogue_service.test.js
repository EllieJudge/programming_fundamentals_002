const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

describe("catalogueService.checkBook", () => {
  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
  });
});

test("returns true if the book exists in the list", () => {
  expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeNull();
  expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeUndefined();
  expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBeDefined();
  expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBeTruthy();
  expect(catalogueService.checkBook("Dracula by Bram Stoker")).not.toBeFalsy();

});

test("returns true if the book exists in the list", () => {
  expect(catalogueService.checkBook("Lord of the Flies by William Golding")).toBe(false);
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns number of books beginning with given letter", () => {
    expect(catalogueService.countBooksByFirstLetter('D')).toBe(1);
  });
});

test("returns number of books beginning with given letter", () => {
  expect(catalogueService.countBooksByFirstLetter('Z')).toBe(0);
});

describe("catalogueService.countBooksByKeyword", () => {
  test("returns number of books that match a given keyword", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });
});

test("returns number of books that match a given keyword", () => {
  expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
});

test("returns number of books that match a given keyword", () => {
  expect(catalogueService.countBooksByKeyword(2666)).toBe(1);
});

test("returns number of books that match a given keyword", () => {
  expect(catalogueService.countBooksByKeyword(true)).toBe(0);
});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns books by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });
});

expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Origin of Species by Charles Darwin"
]);

expect(catalogueService.getBooksByAuthor("melon")).toEqual([]);


