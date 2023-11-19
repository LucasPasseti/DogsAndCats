const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
  };
  
  const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGOUT": // Modificado para tratar logout
        localStorage.removeItem("authState");
        return INITIAL_STATE;
      case "FOLLOW":
        return {
          ...state,
          user: {
            ...state.user,
            followings: [...state.user.followings, action.payload],
          },
        };
      case "UNFOLLOW":
        return {
          ...state,
          user: {
            ...state.user,
            followings: state.user.followings.filter((following) => following !== action.payload),
          },
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  export { INITIAL_STATE }; // Exporta o INITIAL_STATE para garantir o acesso adequado
  