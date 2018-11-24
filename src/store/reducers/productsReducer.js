const initialState = {
  products: [],
  productIdDetails: null,
  inCart: []
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
      return {
        ...state,
        productIdDetails: { ...productIdDetails }
      };
    case "ADDED_TO_CART":
      console.log("Successfully added  product to cart");
      return state;
    case "FAILED_TO_ADD_PRODUCT_INTO_CART":
      console.log(
        "Failed to add prodcut into cart, here is the error: ",
        action.error
      );
      return state;
    case "PRODUCT_ALREADY_IN_CART":
      console.log("This product is already in your cart");
      return {
        ...state,
        inCart: [...state.inCart, action.product.productKey]
      };
    default:
      return state;
  }
};

export default productReducer;
