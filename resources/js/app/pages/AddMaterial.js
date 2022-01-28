import React, { useState, useMemo } from 'react';
import { useAddMaterial } from '../hooks/MaterialHook';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';




function AddMaterial() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [unit, setUnit] = useState('');
  const [vat_rate, setVatRate] = useState('');
  const [vat, setVat] = useState('');
  const [quantity, setQuantity] = useState('')


  const onSuccess = (data) => {
    window.flash('All the records has been loaded successfully!', 'success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Something went wrong ! ${error}`, 'error')
    console.log(error);
  }

  const { mutate:addMaterial } = useAddMaterial(onSuccess,onError);

  const handleAddCustomerClick = () => {
    const data = {
      name,
      cost,
      unit,
      vat_rate,
      vat,
      quantity
    }
    addMaterial(data);
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
                    <h1 className="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Material Creation Form:</h1>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Material Name
                    </label>
                    <input value={name} onChange={e=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Material Name" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="cost">
                      Cost
                    </label>
                    <input value={cost} onChange={e=>setCost(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cost" type="text" placeholder="Cost" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="unit">
                    Unit
                  </label>
                  <div className="relative">
                    <select value={unit} onChange={e=>setUnit(e.target.value)} className="block appearance-none w-72 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="unit">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  </div>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="vat_rate">
                      Vat Rate
                    </label>
                    <input value={vat_rate} onChange={e=>setVatRate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vat_rate" type="number" placeholder="Vat Rate" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="vat">
                      Vat
                    </label>
                    <input value={vat} onChange={e=>setVat(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vat" type="number" placeholder="Vat" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                      Quantity
                    </label>
                    <input value={quantity} onChange={e=>setQuantity(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" />
                  </div>
                    </div>
                  <div className="flex items-center float-right justify-between">
                    <button onClick={handleAddCustomerClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mr-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Save
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

export default AddMaterial;