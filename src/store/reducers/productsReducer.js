const initialState = {
  products: [],
  productIdDetails: null
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

    case "FETCH_PRODUCT_ID_DETAILS":
      let { productIdDetails } = action;
      console.log("productIdDetails: ", productIdDetails);
      return {
        ...state,
        productIdDetails: productIdDetails
      };
    default:
      return state;
  }
};

export default productReducer;
