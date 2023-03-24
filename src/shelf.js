var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var endersGame = {
  title: "Ender's Game",
  mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
  pageCount: 324,
  genre: "sciFi"
};
var sciFiShelf = [hyperion, dune, endersGame];

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
  return shelf;
}





function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i,1);
    }
  }
}





function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(', ');
}





function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(bookTitle)) {
      return true;
    }
  }
  return false;
}





module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
