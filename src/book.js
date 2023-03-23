function createTitle(bookTitle) {
  var modifiedTitle = `The ${bookTitle}`;
  return modifiedTitle;
}

// console.log(createTitle('Harry Potter'));





function buildMainCharacter(yourName, yourAge, yourPronouns) {
  var characterTraits = {
    name: yourName,
    age: yourAge,
    pronouns: yourPronouns
  }
  return characterTraits;
}

// console.log(buildMainCharacter('Daniel', 25, 'he/him/his'));
// console.log(buildMainCharacter('Kath', 35, 'she/her/hers'));
// console.log(buildMainCharacter('Ray', 24, 'they/them'));





bookReviews = ["An astounding success"];
function saveReview(newReview, bookReviews) {
  for (var i = 0; i < bookReviews.length; i++) {
    if (newReview.length === bookReviews[i].length && newReview.includes(bookReviews[i])) {
      return "Sorry, only unique reviews are allowed."
    }
  }
  bookReviews.push(newReview);
  return bookReviews;
}

// console.log(saveReview("You won't be able to put it down", bookReviews));
// console.log(saveReview("A page turner", bookReviews));
// console.log(saveReview("An instant classic!", bookReviews));
// console.log(saveReview("You won't be able to put it down", bookReviews));





function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

// console.log(calculatePageCount("Teenage Ghoul"));
// console.log(calculatePageCount("Dragon in the Summer"));





function writeBook(bookTitle, bookCharacter, bookGenre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
  return book;
}

// console.log(writeBook("Teenage Ghoul", ["Vassya", 16, "she/her"], "fantasy"));





function editBook(book) {
  return book.pageCount *= .75;
}





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}