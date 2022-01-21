import React from 'react';

const ConfForm = () => {
  return (
    <div >
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <h1 class="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Accounts List</h1>
        </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="account">
          Account
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Account" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="account_key">
          Account key
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_key" type="text" placeholder="Account key" />
      </div>
      <div className="mb-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Classification
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Sales</option>
          <option>Cost of goods sold</option>
          <option>Equity</option>
        </select>
      </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Register
        </button>
      </div>
    </form>
  </div>
  );
};

export default ConfForm;
