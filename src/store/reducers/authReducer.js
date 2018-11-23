const initialState = {
  user: null,
  signupStatus: false,
  signupError: null
};

const authReduer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_ACCOUNT":
      const { user } = action;
      return { ...state, user: user, signupStatus: true };
    case "FALIED-TO-CREATE-NEW-ACCOUNT":
      console.log("Failed tp create new user");
      const { error } = action;
      return { ...state, signupStatus: false, signupError: error };
    default:
      return state;
  }
};

export default authReduer;
