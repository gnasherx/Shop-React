const initialState = {
  cartItemCount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_CART_ITEM_COUNT":
      return {
        ...state,
        cartItemCount: action.cartItemCount
      };
    default:
      return state;
  }
};

export default cartReducer;
