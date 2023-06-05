import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { data } from "../data/data";

const orders = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 px-4">
        <h1>Orders</h1>
        <h1>Welcome back,Xavier</h1>
      </div>
      <div className="p-4">
        <div className="p-4 w-full m-auto border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 sm:grid-cols-3 grid-cols-2 md:grid-cols-4 grid items-center justify-between cursor-pointer">
            <span className="cursor-pointer">Order</span>
            <span className="cursor-pointer sm:text-left text-right">
              Status
            </span>
            <span className="cursor-pointer hidden md:grid">Last Order</span>
            <span className="cursor-pointer hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, i) => (
              <li
                key={i}
                className="bg-gray-50 hover:bg-gray-100 my-3 p-2 rounded-lg grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-purple-100">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      {order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm ">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right ">
                  <span
                    className={` p-2  rounded-lg  ${
                      order.status === "Processing"
                        ? "bg-green-200"
                        : order.status === "Completed"
                        ? "bg-blue-200"
                        : "bg-yellow-200"
                    }  `}
                  >
                    {" "}
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden items-center justify-between ">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
