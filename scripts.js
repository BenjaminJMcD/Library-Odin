
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

closeDialog.addEventListener("click", () => {
    form.reset();
})

submitBook.addEventListener("click", () => {
    addBookToLibrary();
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

    let val1 = newTitle.value;
    let val2 = newAuthor.value;
    let val3 = newPages.value;
    let val4 = "";

    if (newRead.checked == true) {
        val4 = "Read"
    }
    else {
        val4 = "Not Read"
    }

    newBook = new Book(val1, val2, val3, val4);
    myLibrary.push(newBook);
    renderNewBook();
    
    inputNew.close();
    form.reset();
    
    return myLibrary;
}

// RENDER myLibrary AS CARDS WHEN BOOK IS ADDED

let cardGrid = document.getElementById("cardGrid");

 function renderNewBook () {

    cardGrid.innerHTML = "";

    for (i=0; i<myLibrary.length; i++) {

        let newCard = document.createElement("div");
        newCard.classList.add("card");
        cardGrid.appendChild(newCard);

        let addTitle = document.createElement("h3");
        addTitle.classList.add("title")
        addTitle.textContent = myLibrary[i].title;
        newCard.appendChild(addTitle);

        let addAuthor = document.createElement("h3");
        addAuthor.classList.add("author");
        addAuthor.textContent = myLibrary[i].author;
        newCard.appendChild(addAuthor);

        let addPages = document.createElement("h4");
        addPages.classList.add("pages");
        addPages.textContent = myLibrary[i].pages;
        newCard.appendChild(addPages);

        let addRead = document.createElement("button");
        addRead.classList.add("read");
        addRead.textContent = myLibrary[i].read;
        newCard.appendChild(addRead);
        
        let addRemove = document.createElement("button");
        addRemove.classList.add("remove");
        addRemove.textContent = "Remove";
        newCard.appendChild(addRemove);
    }
 }

 // TOGGLE READ / NOT READ



 // REMOVE CARD






