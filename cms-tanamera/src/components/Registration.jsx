import { register } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registration(input) {
    const [formRegister, setFormRegister] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const registerAdminHandler = async (dataRegister) => {
    try {
      await dispatch(register(input));
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  const formRegisterOnChangeHandler = (event) => {
    const newUser = {
      ...formRegister,
    };

    newUser[event.target.name] = event.target.value;

    setFormRegister(newUser);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const input = {
      ...formRegister,
    };

    registerAdminHandler(input);
  };

    return (
        <div className="flex flex-col">
            <div className="flex justify-center w-[800px]">
                <a href="/">
                    <p className="text-lg mt-10 font-semibold text-gray-900">
                        Register New Admin
                    </p>
                    <p className="mt-2">
                        Personal Information
                    </p>
                    <p className="text-xs">
                        Use a permanent address where you can receive mail.
                    </p>
                </a>
            </div>
            <div className="flex justify-start w-fit ml-64 mt-2 mb-10 px-2 shadow-2xl">
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col text-gray-800 w-[700px] mt-4 gap-4">
                    <div className="flex justify-between">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700 self-start"
                        >
                            Username
                        </label>
                            <div className="flex flex-col items-between">
                                <input
                                    value={formRegister.username}
                                    onChange={formRegisterOnChangeHandler}                                
                                    type="text"
                                    name="username"
                                    className="text-sm  w-[400px] border-gray-100 rounded-sm shadow"
                                />
                            </div>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 self-start"
                        >
                            Email
                        </label>
                            <div className="flex flex-col items-between">
                                <input
                                    value={formRegister.email}
                                    onChange={formRegisterOnChangeHandler}
                                    type="email"
                                    name="email"
                                    className="text-sm px-2 w-[400px] border-gray-100 rounded-sm shadow"
                                />
                            </div>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700 self-start"
                        >
                            Password
                        </label>
                            <div className="flex flex-col items-between">
                                <input
                                    value={formRegister.password}
                                    onChange={formRegisterOnChangeHandler}
                                    type="password"
                                    name="password"
                                    className="text-sm px-2 w-[400px] border-gray-100 rounded-sm shadow"
                                />
                            </div>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="Phone"
                            className="text-sm font-medium text-gray-700 self-start"
                        >
                            Phone Number
                        </label>
                            <div className="flex flex-col items-between">
                                <input
                                    value={formRegister.phoneNumber}
                                    onChange={formRegisterOnChangeHandler}
                                    type="text"
                                    name="phone"
                                    className="text-sm px-2 w-[400px] border-gray-100 rounded-sm shadow"
                                />
                            </div>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="address"
                            className="text-sm font-medium text-gray-700 self-start"
                        >
                            Address
                        </label>
                            <div className="flex flex-col items-between">
                                <input
                                    value={formRegister.address}
                                    onChange={formRegisterOnChangeHandler}
                                    type="text"
                                    name="address"
                                    className="text-sm px-2 w-[400px] border-gray-100 rounded-sm shadow"
                                />
                            </div>
                    </div>
                    <div className="flex items-center justify-end mt-4 mb-2 gap-4">
                            <button
                                type="click"
                                className="text-gray-800 bg-white-700 hover:bg-orange-800 ring-1 ring-gray-400 focus:ring-4  font-medium rounded text-sm px-5 py-1.5 text-center dark:bg-white dark:hover:bg-orange-600 dark:focus:ring-black"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-1.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-primary-800"
                            >
                                Register
                            </button>
                    </div>
                    </form>
                </div>
            </div>
    );
}