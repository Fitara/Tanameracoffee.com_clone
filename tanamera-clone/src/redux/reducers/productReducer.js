const initialState = {
  products: [],
  product: {},
};

function productReducer(state = initialState, action) {
  if (action.type === "fetch/products") {
    return {
      ...state,
      products: action.payload,
    };
  } else if (action.type === "fetch/detail") {
    return {
      ...state,
      product: action.payload,
    };
  } else {
    return state;
  }
}

export default productReducer;
