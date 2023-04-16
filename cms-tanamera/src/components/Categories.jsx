import { fetchCategories, addCategory } from "../stores/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ModalCategory from "./ModalCategory"
import CategoryRow from "./CategoryRow"
import FormCategory from "./FormCategory";

export default function Categories() {
  function openModal() {
      document.querySelector("#my-modal-4").checked = true;
  }

  const dispatch = useDispatch();

  function handleCreate(form) {
     dispatch(addCategory(form))
  }

  let categories = useSelector((state) => {
    return state.categoryReducer.categories;
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <FormCategory idModal={"create"} onSubmit={ handleCreate} />
      <div className="flex justify-between content-center my-auto ml-48 mt-10 mr-5 font-semibold">
        <p className="">Categories List</p>
        <label htmlFor="my-modal-create" 
          className="flex bg-blue-600 px-2 mb-2 rounded">
          <img
            style={{ filter: "invert(1)" }}
            className="w-[18px] py-1.5"
            src="https://img.icons8.com/ios/256/plus-2-math.png"
            alt=""
          />
          <p className="text-white text-xs py-1.5 ml-2">Create Category</p>
        </label>
      </div>
      <div className="flex flex-col ml-48 mb-5 mb-10 rounded-lg shadow-2xl">
        <div className="overflow-x-auto">
          <div className="text-center p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
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
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Updated At
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
                  {categories.map((category, index) => {
                    return (
                      <CategoryRow
                        category={category}
                        key={category.id}
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
