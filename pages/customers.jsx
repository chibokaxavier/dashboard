import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex justify-between p-4 ">
        <h1>Customers</h1>
        <h1>Welcome back, Xavier</h1>
      </div>
      <div className="p-4">
        <div className="p-4 w-full m-auto border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 sm:grid-cols-3 grid-cols-2 md:grid-cols-4 grid items-center justify-between cursor-pointer">
            <span className="cursor-pointer">Name</span>
            <span className="cursor-pointer sm:text-left text-right">
              Email
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
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right ">
                  {order.name.first}@gmail.com
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

export default customers;
