// Expenses Reducer

const userReducerDefaultState = {
  jwt: 'loggedIn'
};

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN USER':
      return {
        jwt: action.user.jwt
      };
    case 'LOGOUT USER':
      return {
        jwt: ''
      };
    default:
      return state;
  }
};
