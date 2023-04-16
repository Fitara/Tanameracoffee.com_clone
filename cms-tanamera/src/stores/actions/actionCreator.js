import Swal from "sweetalert2";

const base_url = "http://localhost:3000";

export function login(input) {
  return async function (dispatch) {
    try {
      let response = await fetch(`${base_url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw await response.json();
      }

      let data = await response.json();

      localStorage.setItem("access_token", data.access_token);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

export function fetchProducts() {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/products`, {
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      });

      response = await response.json();
      dispatch({
        type: "fetch/products",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/products/${id}`, {
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      });

      response = await response.json();
      dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateProduct(edited, id) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/products/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edited),
      });

      response = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchCategories() {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/categories`, {
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      });
      response = await response.json();
      dispatch({
        type: "fetch/categories",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addCategory(input) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/categories`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      response = await response.json();

      dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateCategory(input, id) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/categories/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      response = await response.json();

      dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteCategory(id) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/categories/${id}`, {
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      });

      response = await response.json();

      dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };
}

export function register(input) {
  return async function (dispatch, getState) {
    try {
      let response = await fetch(`${base_url}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      response = await response.json();

      dispatch(fetchProducts());
    } catch (err) {
      console.log(er);
    }
  };
}

export function logout() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Signed out successfully",
  });
  localStorage.clear();
}
