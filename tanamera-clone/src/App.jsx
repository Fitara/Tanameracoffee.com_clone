import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import router from "./router/index"
import store from "../stores";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
