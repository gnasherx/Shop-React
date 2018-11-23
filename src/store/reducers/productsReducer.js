const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      console.log("Successfully fetched all products.");
      let { products } = action;
      return {
        ...state,
        products: products
      };
    default:
      return state;
  }
};

export default productReducer;
