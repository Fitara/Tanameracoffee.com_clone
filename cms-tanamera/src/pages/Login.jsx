import { login } from "../stores/actions/actionCreator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Swal from 'sweetalert2';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    console.log(user.email, user.password);
    dispatch(
      login({
        email: user.email,
        password: user.password,
      })
    )
      .then((res) => {
        navigate("/products");
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
          title: "Signed in successfully.",
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-4 mx-auto w-[420px]">
          <a href="#" className="flex flex-col">
            <img
              className="w-[150px]"
              src="https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png"
              alt="logo"
            />
          </a>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900 mb-1">
            Sign in to your account
          </h1>
          <div className="w-full bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={submit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Email address
                  </label>
                  <input
                    value={user.email}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="input-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-400 dark:placeholder-gray-300 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@mail.com"
                    required=""
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    value={user.password}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="input-sm  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-3 00 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      ></input>
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-600"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
