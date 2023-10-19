
// BOOK CONSTRUCTOR
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let LOTR = new Book("The Fellowship of the Ring", "J.R. Tolkien", 495, "yes")

myLibrary.push(LOTR);


const card = document.createElement("div.card")
const gridCard = document.getElementById("gridCard")

// DIALOG NEW BOOK ENTRY

let inputNew = document.getElementById('inputNew');
let openDialog = document.getElementById('openDialog');
let submitBook = document.getElementById('submitBook');
let closeDialog = document.getElementById('closeDialog');
let newTitle = document.getElementById('newTitle').value;
let newAuthor = document.getElementById('newAuthor').value;
let newPages = document.getElementById('newPages').value;
let newRead = document.getElementById('newRead').value;


openDialog.addEventListener("click", () => {
    inputNew.showModal();
});

closeDialog.addEventListener("click", () => {
    inputNew.close();
})

submitBook.addEventListener("click", () => addBook);

function addBook() {

}


console.log(LOTR)


console.log(myLibrary)

