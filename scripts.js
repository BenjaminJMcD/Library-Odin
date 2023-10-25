
// EMPTY LIBRARY ASSAY

let myLibrary = [];

// BOOK CONSTRUCTOR

let form = document.getElementById('newBookForm');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
};

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


form.addEventListener("submit", event => {
    event.preventDefault();
})

let newBook

function addBookToLibrary() {

    val1 = newTitle.value;
    val2 = newAuthor.value;
    val3 = newPages.value;
    val4 = newRead.checked;

    if (val4 == true) {
        val4 = "Read"
    }
    else if (val4 == false) {
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

function createBook(item) {

    let newCard = document.createElement("div");
    newCard.classList.add("card");  
    cardGrid.appendChild(newCard);
    newCard.setAttribute("counter", i);

    let addTitle = document.createElement("h3");
    addTitle.classList.add("title")
    addTitle.textContent = item.title;
    newCard.appendChild(addTitle);

    let addAuthor = document.createElement("h3");
    addAuthor.classList.add("author");
    addAuthor.textContent = item.author;
    newCard.appendChild(addAuthor);

    let addPages = document.createElement("h4");
    addPages.classList.add("pages");
    addPages.textContent = item.pages;
    newCard.appendChild(addPages);

    let addRead = document.createElement("button");
    if (item.read == "Read") {
        addRead.classList.add("read");
    }
    else {
        addRead.classList.add("notRead");
    }
    addRead.textContent = item.read;
    newCard.appendChild(addRead);
    addRead.onclick=toggleStatus;

    let addRemove = document.createElement("button");
    addRemove.classList.add("remove");
    addRemove.textContent = "Remove";
    newCard.appendChild(addRemove);
    addRemove.setAttribute("counter", i);
    addRemove.onclick=removeBook;
}

function renderNewBook () {

    cardGrid.innerHTML = "";

    for (i=0; i<myLibrary.length; i++) {

        createBook(myLibrary[i])
    }
 }

 // REMOVE CARD

const removeBook = (e) => {
    const index = e.target.parentNode.getAttribute("counter");
    
    myLibrary.splice(index, 1);

    renderNewBook();
}

// TOGGLE READ STATUS

const toggleStatus = (e) => {
    const index = e.target.parentNode.getAttribute("counter");

    let changeReadBook = myLibrary[index];

    if (changeReadBook.read == "Read") {
        changeReadBook.read = "Not Read"
    }
    else if (changeReadBook.read == "Not Read") {
        changeReadBook.read = "Read"
    }

    renderNewBook();
}
