import React, { useState, useMemo } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Table from '../components/Table';
import  getData  from '../assets/Data'



function BalanceSheet() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: 'Deal date',
        accessor: 'dealDate',
      },
      {
        Header: 'Debit account',
        accessor: 'debitAccount',
      },
      {
        Header: 'Sub account',
        accessor: 'subAccount',
      },
      {
        Header: 'Debit amount',
        accessor: 'debitAmount',
      },
      {
        Header:'Credit account',
        accessor: 'creditAccount',
      },
      {
        Header:'Sub account',
        accessor:'subAccounts',
      },
      {
        Header:'Credit amount',
        accessor:'creditAmount',
      },
      {
        Header:'Remarks',
        accessor:'remarks',
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
  const data = useMemo(()=> getData(),[])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-50">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col  sm:auto-cols-max justify-start sm:justify-end gap-2">
              </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 shadow-md rounded">
              {/* Card (Customers) */}
              <Table columns={columns} data={data} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BalanceSheet;