const initialState = {
  cartItemCount: 0,
  allCartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_CART_ITEM_COUNT":
      return {
        ...state,
        cartItemCount: action.cartItemCount
      };
    case "GET_ALL_CART_PRODUCTS":
      console.log("Successfully fetched all cart items");
      return {
        ...state,
        allCartItems: action.allCartItems
      };
    default:
      return state;
  }
};

export default cartReducer;
