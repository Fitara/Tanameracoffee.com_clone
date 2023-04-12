import Modal from "./Modal";

export default function Products() {
    function openModal() {
        document.querySelector('#my-modal-3').checked = true;
    }
    return (
        <>
            <Modal />
            <div className="flex justify-between content-center my-auto ml-48 mt-10 mr-5 font-semibold">
                <p className="">Product List</p>
                <button onClick={openModal} className="flex bg-blue-600 px-2 mb-2 rounded">
                    <img style={{filter: 'invert(1)',}} className="w-[18px] py-1.5" src="https://img.icons8.com/ios/256/plus-2-math.png" alt=""/><p className="text-white text-xs py-1.5 ml-2">Create Product</p>
                </button>
            </div>
            <div className="flex flex-col ml-48 mb-5 mb-10 rounded-lg shadow-2xl">
                <div className="overflow-x-auto">
                    <div className="text-center p-1.5 w-full inline-block align-middle">
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Created By
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Main Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-left">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Kerinci Natural
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Natural
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Rp. 91.000,00
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            <img src="https://www.google.com" alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-2">
                                            <div className="flex gap-2">
                                                <a
                                                className="text-blue-500 hover:text-blue-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            2
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Bali Kintamani Washed
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Washed
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Rp. 99.000,00
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            <img src="https://www.google.com" alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-2">
                                            <div className="flex gap-2">
                                                <a
                                                className="text-blue-500 hover:text-blue-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            3
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Solok Natural CM TT
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Natural
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Rp. 91.000,00
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            <img src="https://www.google.com" alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-2">
                                            <div className="flex gap-2">
                                                <a
                                                className="text-blue-500 hover:text-blue-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}