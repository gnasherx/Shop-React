const initialState = {};

const adminProduct = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESSFULLY_ADDED_NEW_PRODUCT":
      console.log("Successfully added product");
      return state;
    case "FAILED_TO_ADD_NEW_PRODUCT":
      console.log("Failed to add product, error is, ", action.error);
      return state;
    default:
      return state;
  }
};

export default adminProduct;
