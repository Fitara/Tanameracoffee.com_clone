const initialState = {
  products: [],
};

function productReducer(state = initialState, action) {
  if (action.type === "fetch/products") {
    return {
      ...state,
      products: action.payload,
    };
  } else {
    return state;
  }
}

export default productReducer;