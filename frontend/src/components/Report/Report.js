import React from "react";
import {
  GiCottonFlower,
  GiCrossedAirFlows,
  GiFlowerTwirl,
  GiVineFlower,
  GiVanillaFlower,
} from "react-icons/gi";

const Report = () => {
  return (
    <div className="px-3 md:px-10 mt-10">
      <div className="flex items-center justify-between rounded bg-green-200 shadow p-6 mt-4 md:mt-0 mb-5">
        <GiVanillaFlower className="text-6xl text-amber-300 bg-white border-2 border-amber-300 rounded-full p-2" />
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
            Account Balance
          </h3>
          <strong className="text-xl">14000 Tk</strong>
        </div>
        <GiVanillaFlower className="text-6xl text-amber-300 bg-white border-2 border-amber-300 rounded-full p-2" />
      </div>
      <h1 className="font-bold text-xl md:text-2xl text-purple-700 uppercase mb-4">
        Deposit
      </h1>
      <div className="md:flex justify-between">
        <div className="flex items-center rounded bg-green-200 shadow p-6 mt-4 md:mt-0">
          <GiCottonFlower className="text-6xl text-amber-300 bg-white border-2 border-amber-300 rounded-full p-2" />
          <div className="ml-5">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
              Current Day
            </h3>
            <strong className="text-xl">14000 Tk</strong>
          </div>
        </div>
        <div className="flex items-center rounded bg-teal-200 shadow py-7 px-6 mt-4 md:mt-0">
          <GiCrossedAirFlows className="text-6xl text-rose-300 bg-white border-2 border-rose-300 rounded-full p-2" />
          <div className="ml-5">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
              Current Week
            </h3>
            <strong className="text-xl">14000 Tk</strong>
          </div>
        </div>
        <div className="flex items-center rounded bg-red-200 shadow py-7 px-6 mt-4 md:mt-0">
          <GiFlowerTwirl className="text-6xl text-fuchsia-300 bg-white border-2 border-fuchsia-300 rounded-full p-2" />
          <div className="ml-5">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
              Current Month
            </h3>
            <strong className="text-xl">14000 Tk</strong>
          </div>
        </div>
        <div className="flex items-center rounded bg-amber-200 shadow p-6 mt-4 md:mt-0">
          <GiVineFlower className="text-6xl text-green-300 bg-white border-2 border-green-300 rounded-full p-2" />
          <div className="ml-5">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
              Current Year
            </h3>
            <strong className="text-xl">14000 Tk</strong>
          </div>
        </div>
      </div>
      {/* Graphical view */}
      <div className="mt-10">
        <h1 className="font-bold text-xl md:text-2xl text-purple-700 uppercase mb-4">
          Withdrawal
        </h1>
        <div className="md:flex justify-between">
          <div className="flex items-center rounded bg-green-200 shadow p-6 mt-4 md:mt-0">
            <GiCottonFlower className="text-6xl text-amber-300 bg-white border-2 border-amber-300 rounded-full p-2" />
            <div className="ml-5">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Current Day
              </h3>
              <strong className="text-xl">14000 Tk</strong>
            </div>
          </div>
          <div className="flex items-center rounded bg-teal-200 shadow py-7 px-6 mt-4 md:mt-0">
            <GiCrossedAirFlows className="text-6xl text-rose-300 bg-white border-2 border-rose-300 rounded-full p-2" />
            <div className="ml-5">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Current Week
              </h3>
              <strong className="text-xl">14000 Tk</strong>
            </div>
          </div>
          <div className="flex items-center rounded bg-red-200 shadow py-7 px-6 mt-4 md:mt-0">
            <GiFlowerTwirl className="text-6xl text-fuchsia-300 bg-white border-2 border-fuchsia-300 rounded-full p-2" />
            <div className="ml-5">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Current Month
              </h3>
              <strong className="text-xl">14000 Tk</strong>
            </div>
          </div>
          <div className="flex items-center rounded bg-amber-200 shadow p-6 mt-4 md:mt-0">
            <GiVineFlower className="text-6xl text-green-300 bg-white border-2 border-green-300 rounded-full p-2" />
            <div className="ml-5">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-600">
                Current Year
              </h3>
              <strong className="text-xl">14000 Tk</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
