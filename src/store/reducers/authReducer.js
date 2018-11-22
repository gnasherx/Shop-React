const initialState = {
  user: null,
  signupStatus: false,
  signupError: null
};

const authReduer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_ACCOUNT":
      return { ...state, user: action.user, signupStatus: true };
    case "FALIED-TO-CREATE-NEW-ACCOUNT":
      console.log("Failed tp create new user");
      return { ...state, signupStatus: false, signupError: action.error };
    default:
      return state;
  }
};

export default authReduer;
