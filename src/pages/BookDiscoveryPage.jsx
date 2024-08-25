import React from 'react';
import BookList from '../components/BookList';

const BookDiscoveryPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Discover Books</h1>
      <BookList />
    </div>
  );
};

export default BookDiscoveryPage;
