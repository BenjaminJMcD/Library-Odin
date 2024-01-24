
// EMPTY LIBRARY ASSAY

let myLibrary = [];

// BOOK CLASS CONSTRUCTOR

let newTitle = document.getElementById('newTitle');
let newAuthor = document.getElementById('newAuthor');
let newPages = document.getElementById('newPages');
let newRead = document.getElementById('newRead');

class Book {
    constructor() {
        this.title = newTitle.value;
        this.author = newAuthor.value;
        this.pages = newPages.value + " pages";
        this.read = newRead.checked;
    }
    
    get read() {
        return this._read;
    }
    
    set read(value) {
        if (value) {
            this._read = "Read"
        }
        else if (!value) {
            this._read = "Not Read"
        }
    }
};

// MODAL DIALOG POPUP FOR BOOK ENTRY

let form = document.getElementById('newBookForm');
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

    if (newTitle.validity.valid && newAuthor.validity.valid) {
        newTitle.classList.remove("error");
        newAuthor.classList.remove("error");
        titleError.innerText = "";
        authorError.innerText = "";
        addBookToLibrary();
    }
    else if (!newTitle.validity.valid && !newAuthor.validity.valid) {
        titleError.innerText = "Title Required";
        newTitle.classList.add("error");
        authorError.innerText = "Author Required";
        newAuthor.classList.add("error");
    }
    else if (!newTitle.validity.valid) {
        newAuthor.classList.remove("error");
        authorError.innerText = "";
        titleError.innerText="Title Required";
        newTitle.classList.add("error");
    }
    else if (!newAuthor.validity.valid) {
        newTitle.classList.remove("error");
        titleError.innerText = "";
        authorError.innerText="Author Required"
        newAuthor.classList.add("error");
    }
})

// ADD NEW BOOK OBJECT TO ASSAY

form.addEventListener("submit", (event) => {
    event.preventDefault();
})




function addBookToLibrary() {

    newBook = new Book();

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

 // REMOVE CARD - REMOVE BOOK FROM ASSAY. RENDER ALL

const removeBook = (e) => {
    const index = e.target.parentNode.getAttribute("counter");
    
    myLibrary.splice(index, 1);

    renderNewBook();
}

// TOGGLE READ STATUS - CHANGE READ STATUS IN ASSAY. RENDER ALL

const toggleStatus = (e) => {
    const index = e.target.parentNode.getAttribute("counter");

    let changeReadBook = myLibrary[index];

    if (changeReadBook._read == "Read") {
        changeReadBook._read = "Not Read"
    }
    else if (changeReadBook._read == "Not Read") {
        changeReadBook._read = "Read"
    }

    renderNewBook();
}
