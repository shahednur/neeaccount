import React, { useState, useMemo } from 'react';
import { useConfData } from '../hooks/ConfHook';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import ConfTable from '../components/ConfTable';
import ConfForm from '../components/ConfForm';
import Loader from '../components/Loader';



function Region() {

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
            <div className="flex flex-row">
              {/* Card (Customers) */}
              <div className="flex">
                <div className="flex w-full max-w-xs mr-4">
                    <ConfForm />
                </div>
                <div className='flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"'>
                <table className="min-w-full border text-center">
                        <thead className="border-b bg-gray-400">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 border-r">
                              Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 border-r">
                              Classification
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 border-r">
                              Account key
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          data?.data.map((item, index) => {
                            return (
                              <tr className="border-b" key={index}>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                {item.name}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                {item.classification}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                {item.account_key}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button type="button" className="bg-red-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">Edit</button>
                                <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">Delete</button>
                              </td>
                            </tr>
                            )
                          }
                          )
                        }
                        </tbody>
                      </table>
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

export default Region;