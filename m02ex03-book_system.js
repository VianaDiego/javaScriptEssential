let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }

        books.push(book);
        showbooks();
        clearInput();
    } else {
        alert('Please fill in all fields corretly.');
    }
}

function showbooks() {
    const displayBooks = books.map((book, index) => `<h3>- Book Number: ${index + 1} <button onclick="editBook(${index})">Edit</button> <button onclick="deleteBook(${index})">Delete</button> -</h3>
    <p><strong>Name: </strong> ${book.bookName}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><Strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>No. of Pages: </strong>${book.pagesNumber} page(s)</p>`).join('');

    document.getElementById('books').innerHTML = displayBooks;
}

function editBook(index) {
    const book = books[index];
    const newBookName = prompt('New book\'s name: ', book.bookName);
    if (newBookName == null) return;
    const newBookAuthor = prompt('Author\'s name: ', book.authorName);
    if (newBookAuthor == null) return;
    const newBookDescription = prompt('New description: ', book.bookDescription);
    if (newBookDescription == null) return;
    const newBookPages = prompt('Number of pages: ', book.pagesNumber);
    if (newBookPages == null) return;
    
    books[index] = {
        bookName: newBookName || '?',
        authorName: newBookAuthor || '?',
        bookDescription: newBookDescription || '?',
        pagesNumber: Number(newBookPages) || '?'
    }
    showbooks();
}

function deleteBook(index) {
    const confirmed = confirm(`This action is permanent! \nAre you sure you want to DELETE the book: ${books[index].bookName}?`);
    
    if (confirmed){
        books.splice(index, 1);
        showbooks();
    }
}

function clearInput() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}