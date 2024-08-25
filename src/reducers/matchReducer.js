const matchReducer = (state = [], action) => {
    switch (action.type) {
      case 'FIND_MATCHES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default matchReducer;
  