import { fetchProducts } from "../stores/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
import ProductRow from "./ProductRow";

export default function Products() {
  function openModal() {
    document.querySelector("#my-modal-3").checked = true;
  }

  let products = useSelector((state) => {
    return state.productReducer.products;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <ModalProduct />
      <div className="flex justify-between content-center my-auto ml-48 mt-10 mr-5 font-semibold">
        <p className="">Product List</p>
        <button
          onClick={openModal}
          className="flex bg-blue-600 px-2 mb-2 rounded"
        >
          <img
            style={{ filter: "invert(1)" }}
            className="w-[18px] py-1.5"
            src="https://img.icons8.com/ios/256/plus-2-math.png"
            alt=""
          />
          <p className="text-white text-xs py-1.5 ml-2">Create Product</p>
        </button>
      </div>
      <div className="flex flex-col ml-48 mb-10 rounded-lg shadow-2xl">
        <div className="overflow-x-auto">
          <div className="text-left p-1.5 w-full inline-block align-middle">
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
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
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
                  {products.map((product, index) => {
                    return (
                      <ProductRow
                        product={product}
                        key={product.id}
                        index={index}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
