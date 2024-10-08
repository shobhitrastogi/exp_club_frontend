const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, user: action.payload };
      case 'LOGOUT_USER':
        return {};
      default:
        return state;
    }
  };
  
  export default userReducer;
      