function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}





function addBook(library, book) {
  library.shelves[book.genre].push(book);
}





function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (book === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i,1);
      return `You have now checked out ${book} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`;
}





function takeStock(library, genre) {
  if (genre !== undefined) {
    var bookCount = library.shelves[genre].length;
    return `There are a total of ${bookCount} ${genre} books at the ${library.name}.`
  }
  var bookCount = 0;
  for (var i = 0; i < Object.keys(library.shelves).length; i++) {
    var shelfGenre = Object.keys(library.shelves)[i];
    var shelfCount = library.shelves[shelfGenre].length;
    bookCount += shelfCount;
  }
  return `There are a total of ${bookCount} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};