import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { MdDangerous } from "react-icons/md";

const Members = () => {
  return (
    <div className="px-3 md:px-10">
      <div className="my-5 flex justify-end">
        <button className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          New Member <HiUserAdd className="ml-3 text-2xl"/>
        </button>
      </div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border border-slate-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center whitespace-nowrap">
              <td className="py-4 px-6 md:text-xl">Bilash Kumar</td>
              <td className="py-4 px-6 md:text-xl">11-12-2022</td>
              <td className="py-4 px-6 md:text-xl">200</td>
              <td className="py-4 px-6 flex item-center justify-center"><FcCheckmark className="text-2xl"/></td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center whitespace-nowrap">
              <td className="py-4 px-6 md:text-xl">Bilash Kumar 2</td>
              <td className="py-4 px-6 md:text-xl">11-12-2022</td>
              <td className="py-4 px-6 md:text-xl">0</td>
              <td className="py-4 px-6 flex item-center justify-center"><MdDangerous className="text-2xl text-red-600"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
