var main = document.getElementById("main");

//Books
const books = [
    {
        title: "Good To Great",
        author: "James C. Collins",
        publicationYear: 2011,
        isFiction: false
    },
    {
        title: "Invisible Man",
        author: "John Ellison",
        publicationYear: 1952,
        isFiction: true
    },
    {
        title: "Unexpected Joy At Dawn",
        author: "Alex Agyei Agyiri",
        publicationYear: 2003,
        isFiction: true
    },
    {
        title: "The Lion And The Jewel",
        author: "Wole Soyinka",
        publicationYear: 1962,
        isFiction: true
    },
    {
        title: "The Immortal Life Of Henrietta Lacks",
        author: "Rebecca Skloot",
        publicationYear: 2010,
        isFiction: false
    },
    {
        title: "Silent Springs",
        author: "Rachel Carson",
        publicationYear: 1962,
        isFiction: false
    }
]

//Task 1: Display Book Titles
let titles = '';
for (let i = 0; i < books.length; i++) {
    titles += `<li>${books[i].title}</li>`
};

//Task 2: Categorize Books
const fictionTitles = [];
const nonFictionTitles = [];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.isFiction) {
        fictionTitles.push(book.title);
    } else {
        nonFictionTitles.push(book.title);
    }
}

//Task 3: Display Book Information
let bookInfo = ''
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const fictionOrNonFiction = book.isFiction ? "Fiction" : "Non-Fiction";
    bookInfo += `<li><p> ${book.title}, is a book written by ${book.author} in the year ${book.publicationYear} and is based on a ${fictionOrNonFiction}</p></li>`;
}

//Task 4: Fiction Book Count
let fictionCount = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].isFiction) {
        fictionCount++;
    }
}

//Task 5: Display Longest Title Book
let longestTitleBook = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].title.length > longestTitleBook.title.length) {
        longestTitleBook = books[i];
    }
}







main.innerHTML = `
<h1>Book Library Management</h1>
<h3>Task 1: Display Book Titles</h3>
<ol>
${titles}
</ol>
<h3>Task 2: Categorize Books</h3>
<p><strong>Fiction Books:</strong>${fictionTitles[0]},${fictionTitles[1]} and ${fictionTitles[2]}</p>
<p><strong>Non-Fiction Books:</strong>${nonFictionTitles[0]}, ${nonFictionTitles[1]} and ${nonFictionTitles[2]}</p>
<h3>Task 3: Display Book Information</h3>
<ul>${bookInfo}</ul>
<h3>Task 4: Fiction Book Count</h3>
<p>Number Of Fiction Books:${fictionCount}</p>
<h3>Longest Title Book:</h3>
<p><strong>Book with longest title:</strong>${longestTitleBook.title}</p>
`

