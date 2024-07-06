interface Book {
    title: string;
    genre: "fiction" | "non-fiction" | "educational";
    price: number;
};

const Books: Book[] = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 }
];

//Function
function filterBook(Books:Book[]):Book[] {
    return Books.filter(Book=> (Book.genre == "fiction" && Book.price>300));
}

//discount
function discountBook(Books:Book[]):Book[]{
    return Books.map(book=>({...book,price:book.price * 0.9}));
}

//Call Function
let filterBooks = filterBook(Books);
let discountBooks = discountBook(filterBooks);

console.log(discountBooks);