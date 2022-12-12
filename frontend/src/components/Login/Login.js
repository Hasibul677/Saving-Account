import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="m-3 mt-32 flex justify-center items-center">
      <div className=" w-full md:w-1/3">
        <div>
          <h2 className="text-center text-3xl font-serif uppercase ">
            SIGN-IN
          </h2>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-violet-200 shadow-lg rounded px-8 py-16 mb-4"
        >
          <div className="mb-4">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email Address"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2 ">
              Password
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="*********"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
