import React, { Fragment, useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { MdDangerous } from "react-icons/md";
import moment from "moment";
import { FiEdit } from "react-icons/fi";

const Saving = () => {
  const [showModal, setShowModal] = useState(false);
  const currDate = moment().format("YYYY-MM-D");
  const [search, setSearch] = useState({
    searchName: "",
    searchStatus: "",
    fromDate: "",
    toDate: "",
  });
  const [data, setData] = useState({
    name: "",
    date: "",
    amount: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const topSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <Fragment>
      {/* Saving Table */}
      <div className="px-3 md:px-10">
        <div className="my-5 flex justify-end">
          <button
            className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Saving <HiUserAdd className="ml-3 text-2xl" />
          </button>
        </div>
        {/* search field */}
        <form
          onSubmit={topSearch}
          className="md:flex items-center bg-gray-300 mb-4 py-5 md:py-0 shadow"
        >
          <div className="md:w-1/6 px-3 my-3">
            <label className="block uppercase tracking-wide text-purple-900 text-xs font-bold mb-2">
              Name
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="searchName"
                onChange={handleSearch}
              >
                <option value="">Select Name</option>
                <option value="1">New Mexico</option>
                <option value="1">Missouri</option>
                <option value="1">Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/6 px-3 my-3">
            <label className="block uppercase tracking-wide text-purple-900  text-xs font-bold mb-2">
              Status
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="searchStatus"
                onChange={handleSearch}
              >
                <option value="">Select One</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/6 px-3 my-3">
            <label className="block uppercase tracking-wide text-purple-900  text-xs font-bold mb-2">
              From
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="date"
              name="fromDate"
              onChange={handleSearch}
              max={currDate}
            />
          </div>
          <div className="md:w-1/6 px-3 my-3">
            <label className="block uppercase tracking-wide text-purple-900  text-xs font-bold mb-2">
              To
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="date"
              name="toDate"
              onChange={handleSearch}
              max={currDate}
            />
          </div>
          <div className="px-3 md:mt-6">
            <button
              className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
        {/* Table data */}
        <div className="overflow-x-auto relative">
          <table className="w-full shadow text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border border-slate-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="py-3 px-6">
                  SI
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  Deposit Date
                </th>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  Deposit Time
                </th>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  Update Date
                </th>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  Update Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Amount
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center whitespace-nowrap">
                <td className="py-4 px-6 md:text-xl">1</td>
                <td className="py-4 px-6 md:text-xl">Bilash Kumar</td>
                <td className="py-4 px-6 md:text-xl">11-12-2022</td>
                <td className="py-4 px-6 md:text-xl">12:35 AM</td>
                <td className="py-4 px-6 md:text-xl">11-12-2022</td>
                <td className="py-4 px-6 md:text-xl">12:35 AM</td>
                <td className="py-4 px-6 md:text-xl">200</td>
                <td className="py-4 px-6 flex item-center justify-center">
                  <FcCheckmark className="text-2xl" />
                </td>
                <td className="py-4 px-6">
                  <button
                    className="shadow bg-purple-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                    type="button"
                  >
                    <FiEdit className="text-xl text-white" />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center whitespace-nowrap">
                <td className="py-4 px-6 md:text-xl">2</td>
                <td className="py-4 px-6 md:text-xl">Bilash Kumar</td>
                <td className="py-4 px-6 md:text-xl">11-12-2022</td>
                <td className="py-4 px-6 md:text-xl">12:35 AM</td>
                <td className="py-4 px-6 md:text-xl">11-12-2022</td>
                <td className="py-4 px-6 md:text-xl">12:35 AM</td>
                <td className="py-4 px-6 md:text-xl">0</td>
                <td className="py-4 px-6 flex item-center justify-center">
                  <MdDangerous className="text-2xl text-red-600" />
                </td>
                <td className="py-4 px-6">
                  <button
                    className="shadow bg-purple-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                    type="button"
                  >
                    <FiEdit className="text-xl text-white" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Saving Modal */}
      <div>
        {showModal ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold px-3">Saving Info.</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <MdDangerous className="text-2xl text-red-600" />
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSave} className="w-96">
                      <div className="mb-6">
                        <div className="px-3 mb-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Name
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              name="name"
                              onChange={handleChange}
                            >
                              <option value="">Select Name</option>
                              <option value="1">New Mexico</option>
                              <option value="1">Missouri</option>
                              <option value="1">Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Date
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            required
                            name="date"
                            type="date"
                            onChange={handleChange}
                            max={currDate}
                          />
                        </div>
                        <div className="px-3 my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Amount
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            required
                            type="number"
                            name="amount"
                            defaultValue="200"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="px-3 mt-8 flex justify-end">
                          <button
                            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Saving;
