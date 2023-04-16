import {
  updateCategory,
  deleteCategory,
  fetchCategories,
} from "../stores/actions/actionCreator";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormCategory from "./FormCategory";

export default function CategoryRow({ category, index }) {
  const dispatch = useDispatch();

  const deleteCategoryHandler = async (id) => {
    try {
      await dispatch(deleteCategory(id));
      await dispatch(fetchCategories);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteCategoryHandler(category.id);
  }
  
  function handleSubmit(form, id) {
    dispatch(updateCategory(form, id))
  }

  return (
    <>
      <FormCategory
        onSubmit={handleSubmit}
        category={category}
        idModal={category.id}
      />
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          {index + 1}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {category.name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {category.createdAt.split("T")[0]}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {category.createdAt.split("T")[0]}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-2">
          <div className="flex gap-2">
            <label htmlFor={`my-modal-${category.id}`} className="text-blue-500 hover:text-blue-700" href="#">
              Edit
            </label>
            <a onClick={deleteHandler} className="text-red-500 hover:text-red-700" href="#">
              Delete
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
