const initialState = {
  user: null,
  signupError: null,
  loginError: null
};

const authReduer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_ACCOUNT":
      let { signupUser } = action;
      return {
        ...state,
        user: signupUser
      };
    case "FALIED-TO-CREATE-NEW-ACCOUNT":
      console.log("Failed to create new user");
      const { signupError } = action;
      return {
        ...state,
        signupError: signupError
      };
    case "CUSTOMER_LOGIN":
      let { loginUser } = action;
      return {
        ...state,
        user: loginUser
      };
    case "FAILED_CUSTOMRE_LOGIN":
      const { loginError } = action;
      return {
        ...state,
        loginError: loginError
      };

    default:
      return state;
  }
};

export default authReduer;
