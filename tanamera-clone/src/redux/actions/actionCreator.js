const base_url = "http://localhost:3000";

export function fetchProducts() {
  return async function (dispatch) {
    try {
      let response = await fetch(`${base_url}/products`);
      response = await response.json();
      dispatch({
        type: "fetch/products",
        payload: response,
      });
        
    } catch (err) {
      dispatch("error");
    }
  };
}

export function detail(params) {
  return async function (dispatch) {
    try {
      let response = await fetch(`${base_url}/products/${params}`);
      response = await response.json();
      dispatch({
        type: "fetch/detail",
        payload: response,
      });
    } catch (err) {
      dispatch(detailProductFetchReject(err));
    }
  };
}
