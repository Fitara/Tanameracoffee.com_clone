import { deleteProduct, fetchProducts } from "../stores/actions/actionCreator"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ProductRow({ product, index }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = async (id) => {
    try {
      await dispatch(deleteProduct(id));
      await dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteProductHandler(product.id);
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          {index + 1}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {product.name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {product.Category.name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          Rp. {product.price}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {product.User.username}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          <img className="w-[75px] rounded-full" src={product.mainImg} alt="" />
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-2">
          <div className="flex gap-2">
            <Link>
              <div className="text-blue-500 hover:text-blue-700" href="#">
                Edit
              </div>
            </Link>
            <a onClick={deleteHandler} className="text-red-500 hover:text-red-700" href="#">
              Delete
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
