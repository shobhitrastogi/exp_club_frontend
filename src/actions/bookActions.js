export const addBook = (bookData) => ({
    type: 'ADD_BOOK',
    payload: bookData,
  });
  
  export const removeBook = (bookId) => ({
    type: 'REMOVE_BOOK',
    payload: bookId,
  });
  