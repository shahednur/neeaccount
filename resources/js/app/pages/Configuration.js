import React, { useState, useMemo } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import ConfTable from '../components/ConfTable';
import getConfData from '../assets/ConfData';
import ConfForm from '../components/ConfForm';



function Configuration() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: 'Account',
        accessor: 'account',
      },
      {
        Header: 'Classification',
        accessor: 'classification',
      },
      {
        Header: 'Account key',
        accessor: 'accountKey',
      },
      {
        Header:'Delete',
        accessor: 'delete',
        Cell: ({value}) => (<button type="button"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">Delete</button>)
      },
    ],
    []
  );
  const data = useMemo(()=> getConfData(),[])

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
                  <ConfTable columns={columns} data={data} />
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

export default Configuration;