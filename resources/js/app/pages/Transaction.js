import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import TransactionForm from '../components/TransactionForm';
import Loader from '../components/Loader'

function Transaction() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading]  = useState(false);


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
               <div className='bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4"'>
               {isLoading && <Loader onLoad={()=>setIsLoading(true)}/>}
                 <TransactionForm />
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Transaction;