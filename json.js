var book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas"
  ],
  edition: 3,
  year: 2011,
  toJSON: function () {
    return this.title;
  }
};

var jsonText = JSON.stringify(book);

// var bookCopy = JSON.parse(jsonText);
console.log(jsonText);
// console.log(bookCopy);