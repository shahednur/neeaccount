import React, { useState, useMemo } from 'react';
import { useConfData } from '../hooks/ConfHook';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import ConfTable from '../components/ConfTable';
import ConfForm from '../components/ConfForm';
import Loader from '../components/Loader';



function AddCustomer() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSuccess = (data) => {
    window.flash('All the records has been loaded successfully!', 'success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Something went wrong ! ${error}`, 'error')
    console.log(error);
  }

  const { isLoading, data, isError, error, refetch} = useConfData(onSuccess, onError);


  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col  sm:auto-cols-max justify-start sm:justify-end gap-2">
              </div>
            </div>
            {/* Cards */}
            <div className="container mx-auto">
            <div className="flex">
              {/* Card (Customers) */}
                <div className="mr-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <h1 className="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Customer Creation Form:</h1>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account">
                      Account
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Account" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Classification
                  </label>
                  <div className="relative">
                    <select  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Sales</option>
                      <option>Cost of goods sold</option>
                      <option>Equity</option>
                    </select>
                  </div>
                  </div>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account">
                      Account
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Account" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Classification
                  </label>
                  <div className="relative">
                    <select  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Sales</option>
                      <option>Cost of goods sold</option>
                      <option>Equity</option>
                    </select>
                  </div>
                  </div>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account">
                      Account
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Account" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_key">
                      Account key
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Classification
                  </label>
                  <div className="relative">
                    <select  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Sales</option>
                      <option>Cost of goods sold</option>
                      <option>Equity</option>
                    </select>
                  </div>
                  </div>
                    </div>
                  <div className="flex items-center float-right justify-between">
                    <button  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mr-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Register
                    </button>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddCustomer;