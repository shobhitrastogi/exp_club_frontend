import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Books Available for Exchange</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b border-gray-300 py-2">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
