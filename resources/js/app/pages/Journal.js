import React, { useState, useMemo } from 'react';
import { useTransactionData  } from '../hooks/TransactionHook';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

import Loader from '../components/Loader'

function Journal() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSuccess = (data) => {
    window.flash('All the journals has beeen loaded successfully!','success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Something went wrong! ${error}`, 'error')
    console.log(error);
  }
  
  const {isLoading, data, isError, error, refetch} = useTransactionData(onSuccess, onError);

  if(isLoading){
    return <Loader />
  }
  if(isError){
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
            <div className="flex shadow-md rounded">
              {/* <JournalTable columns={columns} data={data} /> */}
              <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full border text-center rounded-md">
                          <thead className="border-b bg-gray-400">
                            <tr>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Deal Date
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Debit Account
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Sub Account
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Debit Amount
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Credit Account
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Sub Account
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Credit Amount
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1 border-r">
                                Remark
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-1 py-1">
                                Delete
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data?.data.map((item, index)=>{
                                return (
                                  <tr className="border-b" key={index}>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                    {item.deal_date}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.debit_account_key}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.debit_sub_account_key}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.debit_amount}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.credit_account_key}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.credit_sub_account_key}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.credit_amount}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap border-r">
                                  {item.remark}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                                  <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">Delete</button>
                                  </td>
                                </tr>
                                )
                              })
                            }
                          
                          </tbody>
                        </table>
                      </div>
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

export default Journal;