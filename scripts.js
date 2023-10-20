
// EMPTY LIBRARY ASSAY

let myLibrary = [];

// BOOK CONSTRUCTOR

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// MODAL DIALOG POPUP FOR BOOK ENTRY

let inputNew = document.getElementById('inputNew');
let openDialog = document.getElementById('openDialog');
let submitBook = document.getElementById('submitBook');
let closeDialog = document.getElementById('closeDialog');

openDialog.addEventListener("click", () => {
    inputNew.showModal();
});

closeDialog.addEventListener("click", () => {
    inputNew.close();
})

// ADD BOOK TO ASSAY WITH MODAL DIALOG

let newTitle = document.getElementById('newTitle');
let newAuthor = document.getElementById('newAuthor');
let newPages = document.getElementById('newPages');
let newRead = document.getElementById('newRead');
let form = document.getElementById('newBookForm');

function addBookToLibrary() {

    val1 = newTitle.value;
    val2 = newAuthor.value;
    val3 = newPages.value;
    val4 = newRead.value;

    newBook = new Book(val1, val2, val3, val4);
    myLibrary.push(newBook);
    
    inputNew.close();
    //form.reset();
    renderAssayCards(val1, val2, val3, val4);

    //return false;
}

// let LOTR = new Book("The Fellowship Of The Ring", "J. R. Tolkien", 444, "Yes");

// myLibrary.push(LOTR);

// let first = myLibrary[0];

// console.log(first.title);



// CREATE NEW CARD WHEN BOOK IS ADDED

let cardGrid = document.getElementById("cardGrid");
// let title = document.getElementsByClassName('title');
// let author = document.getElementsByClassName('author');
// let pages = document.getElementsByClassName('pages');
// let read = document.getElementsByClassName('read');

 function renderAssayCards (a, b, c, d) {

         let newCard = document.createElement("div");
         newCard.classList.add("card");
         cardGrid.appendChild(newCard);

         addTitle = document.createElement("h3");
         addTitle.classList.add("title")
         addTitle.textContent = a;
         newCard.appendChild(addTitle);

         addAuthor = document.createElement("h3");
         addAuthor.classList.add("author");
         addAuthor.textContent = b;
         newCard.appendChild(addAuthor);

         addPages = document.createElement("h4");
         addPages.classList.add("pages");
         addPages.textContent = c;
         newCard.appendChild(addPages);

         addRead = document.createElement("button");
         addHead.classList.add("read");
         addRead.textContent = d;
         newCard.appendChild(addRead);
 }

// function doIt () {
//     let cardGrid = document.getElementById("cardGrid");
//     let newCard = document.createElement("div.card");
//     cardGrid.appendChild(newCard);
// }

// doIt();
