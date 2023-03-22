// function createTitle() {
  
// }

// module.exports = {
//   createTitle,
//   // buildMainCharacter,
//   // saveReview,
//   // calculatePageCount,
//   // writeBook,
//   // editBook
// }

function createTitle(bookTitle) {
  var randomInteger = Math.floor(Math.random() * 100);
  randomInteger;
  if (0 <= randomInteger && randomInteger <= 25) {
    modifiedTitle = `The ${bookTitle}`;
    return modifiedTitle;
  } else if (25 < randomInteger && randomInteger <= 50) {
    modifiedTitle = `Dancing ${bookTitle}`;
    return modifiedTitle;
  } else if (50 < randomInteger && randomInteger <= 75) {
    modifiedTitle = `${bookTitle} in the Summer`;
    return modifiedTitle;
  } else {
    modifiedTitle = `Teenage ${bookTitle}`;
    return modifiedTitle;
  }
}

// console.log(createTitle('Harry Potter'));
// console.log(createTitle('Harry Potter'));
// console.log(createTitle('Harry Potter'));
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
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var characterSplit = bookTitle.split('');
  for (var i = 0; i < characterSplit.length; i++) {
    if (!alphabet.includes(characterSplit[i].toLowerCase())) {
      delete characterSplit[i];
    }
  }
  pageCount = characterSplit.join('').length * 20;
  return pageCount;
}

// console.log(calculatePageCount("Harry Potter and the Sorcerer's Stone"));
// console.log(calculatePageCount("Absalom, Absalom!"));





function writeBook(bookTitle, heroName, heroAge, heroPronouns, bookGenre) {
  var book = {
    Title: createTitle(bookTitle),
    mainCharacter: buildMainCharacter(heroName, heroAge, heroPronouns),
    pageCount: calculatePageCount(bookTitle),
    Genre: bookGenre
  }
  return book;
}

// console.log(writeBook("Harry Potter", "Harry", 11, "he/him/his", "fantasy"));





function editBook(bookTitle, heroName, heroAge, heroPronouns, bookGenre) {
  var book = {
    Title: createTitle(bookTitle),
    mainCharacter: buildMainCharacter(heroName, heroAge, heroPronouns),
    pageCount: Math.round(calculatePageCount(bookTitle) * 0.75),
    Genre: bookGenre
  }
  return book;
}

console.log(editBook("Harry Potter", "Harry", 11, "he/him/his", "fantasy"));