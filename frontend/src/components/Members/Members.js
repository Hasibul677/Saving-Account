import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { MdDangerous, MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
const address = require("@bangladeshi/bangladesh-address");

const Members = () => {
  const [showModal, setShowModal] = useState(false);
  const currDate = moment().format("YYYY-MM-D");
  const [data, setData] = useState({
    name: "",
    division: "",
    district: "",
    upazila: "",
    phone: "",
  });
  const allDivision = address.allDivision();
  const allDistrict = address.districtsOf(data?.division);
  const allUpazila = address.upazilasOf(data?.district);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="px-3 md:px-10">
      <div className="my-5 flex justify-end">
        <button
          className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          New Member <HiUserAdd className="ml-3 text-2xl" />
        </button>
      </div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border border-slate-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="py-3 px-6">
                SI
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Phone
              </th>
              <th scope="col" className="py-3 px-6">
                Division
              </th>
              <th scope="col" className="py-3 px-6">
                District
              </th>
              <th scope="col" className="py-3 px-6">
                Upazila
              </th>
              <th scope="col" className="py-3 px-6">
                Join
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
              <td className="py-4 px-6 md:text-xl">01795443674</td>
              <td className="py-4 px-6 md:text-xl">Rajsahi</td>
              <td className="py-4 px-6 md:text-xl">Pabna</td>
              <td className="py-4 px-6 md:text-xl">Aminpur</td>
              <td className="py-4 px-6 md:text-xl">11-12-2022</td>
              <td className="py-4 px-6">
                <button
                  className="shadow bg-purple-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                  type="button"
                >
                  <FiEdit className="text-xl text-white" />
                </button>
                <button
                  className="ml-2 shadow bg-red-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                  type="button"
                >
                  <MdDeleteForever className="text-xl" />
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center whitespace-nowrap">
              <td className="py-4 px-6 md:text-xl">2</td>
              <td className="py-4 px-6 md:text-xl">Bilash Kumar</td>
              <td className="py-4 px-6 md:text-xl">01795443674</td>
              <td className="py-4 px-6 md:text-xl">Rajsahi</td>
              <td className="py-4 px-6 md:text-xl">Pabna</td>
              <td className="py-4 px-6 md:text-xl">Aminpur</td>
              <td className="py-4 px-6 md:text-xl">11-12-2022</td>
              <td className="py-4 px-6">
                <button
                  className="shadow bg-purple-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                  type="button"
                >
                  <FiEdit className="text-xl text-white" />
                </button>
                <button
                  className="ml-2 shadow bg-red-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded"
                  type="button"
                >
                  <MdDeleteForever className="text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Members Modal */}
      <div>
        {showModal ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold px-3">User Info.</h3>
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
                        <div className="px-3 my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            required
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="px-3 mb-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Division
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              name="division"
                              onChange={handleChange}
                            >
                              <option value="">Select One</option>
                              {allDivision &&
                                allDivision.map((division) => (
                                  <option key={division} value={division}>
                                    {division}
                                  </option>
                                ))}
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
                        <div className="px-3 mb-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            District
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              name="district"
                              disabled={data.division === "" ? true : false}
                              onChange={handleChange}
                            >
                              <option value="">Select One</option>
                              {allDistrict &&
                                allDistrict.map((district) => (
                                  <option key={district} value={district}>
                                    {district}
                                  </option>
                                ))}
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
                        <div className="px-3 mb-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Upazila
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              name="upazila"
                              disabled={data.district === "" ? true : false}
                              onChange={handleChange}
                            >
                              <option value="">Select One</option>
                              {allUpazila &&
                                allUpazila.map((upazila) => (
                                  <option
                                    key={upazila.upazila}
                                    value={upazila.upazila}
                                  >
                                    {upazila.upazila}
                                  </option>
                                ))}
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
                            Join
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
                            Phone
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            required
                            maxLength="11"
                            minLength="11"
                            name="phone"
                            placeholder="01795****55"
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Members;
