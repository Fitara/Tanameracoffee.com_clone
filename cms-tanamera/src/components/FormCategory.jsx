import { addCategory } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FormCategory({ category, idModal, onSubmit }) {
    const [form, setForm] = useState({
        name: ""
    })

    const dispatch = useDispatch()

    async function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        category ? setForm({ name: category.name }) : setForm ({ name: form.name})
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        category ? onSubmit(form, category.id) : onSubmit(form)
        document.querySelector(`#my-modal-${idModal}`).checked = false;
    }

    return (
        <>
            <input type="checkbox" id={`my-modal-${idModal}`} className="modal-toggle" />
            <div className="modal">
                    <div className="w-[400px] p-6 m-auto bg-white rounded-sm shadow-xl shadow-2xl lg:max-w-xl">
                        <div className="flex justify-between">
                        <h1 className="text-normal font-semibold text-start text-gray-700">
                            Create New Category
                        </h1>
                        <label htmlFor={`my-modal-${idModal}`} className="btn btn-sm btn-circle relative">✕</label>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-2">
                            <div className="mb-2">
                                <label
                                    forhtml="name"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Category Name
                                </label>
                                <input
                                onChange={handleChange}
                                value={form.name}
                                    name="name"
                                    type="text"
                                    className="block w-full px-4 mt-1 text-gray-700 bg-white border rounded-sm focus:border-gray-400"
                                />
                            </div>
                            <div className="flex items-center justify-center mt-4 gap-4">
                                    <button
                                            type="submit"
                                            className="text-white bg-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-1.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-primary-800"
                                        >
                                            Submit
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    );
}