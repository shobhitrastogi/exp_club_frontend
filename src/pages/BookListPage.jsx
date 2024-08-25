import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BookListPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Manage Your Books</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default BookListPage;
