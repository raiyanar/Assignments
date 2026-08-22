const books = [
  {
    title: "JavaScript Journey",
    authorName: "Adib",
    releaseYear: 2011,
  },
  {
    title: "Sherlock Holms",
    authorName: "Ammu",
    releaseYear: 1999,
  },
  {
    title: "Adventure of Tintin",
    authorName: "Apu",
    releaseYear: 2007,
  },
  {
    title: "Khuda Lagse!",
    authorName: "Abdurrahman",
    releaseYear: 2001,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear < 2010);

console.log(filteredBooks.sort(sortByYear));
