export const loginUser = ({jwt = ''} = {}) => ({
  type: 'LOGIN USER',
  user: {
    jwt
  }
});

export const logoutUser = () => ({
  type: 'LOGOUT USER'
});