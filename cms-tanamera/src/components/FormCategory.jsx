export default function FormCategory() {
    return (
        <div id="my-modal-3" className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-[400px] p-6 m-auto bg-white rounded-sm shadow-xl shadow-2xl lg:max-w-xl">
                <h1 className="text-normal font-semibold text-start text-gray-700">
                    Create New Category
                </h1>
                <form className="mt-2">
                    <div className="mb-2">
                        <label
                            forhtml="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Category Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 mt-1 text-gray-700 bg-white border rounded-sm focus:border-gray-400"
                        />
                    </div>
                </form>

                <div className="flex items-center justify-end mt-4 gap-4">
                        <button
                                type="click"
                                className="text-gray-800 bg-white-700 hover:bg-orange-800 ring-1 ring-gray-400 focus:ring-4  font-medium rounded text-sm px-5 py-1.5 text-center dark:bg-white dark:hover:bg-orange-600 dark:focus:ring-black"
                            >
                                Cancel
                        </button>
                        <button
                                type="click"
                                className="text-white bg-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-1.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-primary-800"
                            >
                                Submit
                        </button>
                </div>
            </div>
        </div>
    );
}