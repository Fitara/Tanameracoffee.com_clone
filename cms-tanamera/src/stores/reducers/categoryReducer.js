const initialState = {
  categories: [],
};

function categoryReducer(state = initialState, action) {
  if (action.type === "fetch/categories") {
    return {
      ...state,
      categories: action.payload,
    };
  } else {
    return state;
  }
}

export default categoryReducer;
