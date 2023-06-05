import React from "react";
import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="col-span-1 lg:h-[70vh] h-[50vh] rounded-lg p-4 border bg-white overflow-scroll scrollbar-none relative w-full m-auto">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6"> {order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
