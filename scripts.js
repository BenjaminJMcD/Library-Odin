
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

form.addEventListener("submit", event => {
    event.preventDefault();
})

function addBookToLibrary() {

    val1 = newTitle.value;
    val2 = newAuthor.value;
    val3 = newPages.value;
    val4 = newRead.value;

    newBook = new Book(val1, val2, val3, val4);
    renderNewBook();
    myLibrary.push(newBook);
    console.log(myLibrary);
    
    inputNew.close();
    form.reset();
    
    return myLibrary;
}

console.log(myLibrary)

// CREATE NEW CARD WHEN BOOK IS ADDED

let cardGrid = document.getElementById("cardGrid");

 function renderNewBook () {

        let newCard = document.createElement("div");
        newCard.classList.add("card");
        cardGrid.appendChild(newCard);

        let addTitle = document.createElement("h3");
        addTitle.classList.add("title")
        addTitle.textContent = newBook.title;
        newCard.appendChild(addTitle);

        let addAuthor = document.createElement("h3");
        addAuthor.classList.add("author");
        addAuthor.textContent = newBook.author;
        newCard.appendChild(addAuthor);

        let addPages = document.createElement("h4");
        addPages.classList.add("pages");
        addPages.textContent = newBook.pages;
        newCard.appendChild(addPages);

        let addRead = document.createElement("button");
        addRead.classList.add("read");
        addRead.textContent = newBook.read;
        newCard.appendChild(addRead);
        
        let addRemove = document.createElement("button");
        addRemove.classList.add("remove");
        addRemove.textContent = "Remove";
        newCard.appendChild(addRemove);
        // addRemove.addEventListener("click", () => {
        // addRemove.parentNode.remove();
        // })
 }

 // REMOVE CARD






