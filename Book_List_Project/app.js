//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//add book to list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');

    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X </a></td>
    `

    list.appendChild(row);
}

//show alert
UI.prototype.showAlert = function (msg, className) {
    //create div
    const div = document.createElement('div');
    div.className = `alert ${className}`

    //add text
    div.appendChild(document.createTextNode(msg));

    //the parent and form
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    container.insertBefore(div, form);

    //time out after 3 secs
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000)
}

//delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === "delete") {
        //remove tr
        target.parentElement.parentElement.remove();
    }
}

//clear field
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
    //get form value
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //instantiate a book object
    const book = new Book(title, author, isbn);


    //instantiate UI
    const ui = new UI();

    //validation
    if (title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('please fill in all fields', 'error');

    } else {
        //add book to list
        ui.addBookToList(book);

        //show success
        ui.showAlert('Book added!', 'success')

        //clear ui fields
        ui.clearFields();
    }


    e.preventDefault();
})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteBook(e.target);

    //Show message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
})